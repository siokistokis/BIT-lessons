let C = [
    {
        id: 1,
        img: './images/armchair.jpg',
        title: 'chair',
        price: 50,
        quantity: 4
    },
    {
        id: 2,
        img: './images/table.jpg',
        title: 'table',
        price: 100,
        quantity: 2
    },
    {
        id: 3,
        img: './images/sofa.jpg',
        title: 'Sofa',
        price: 200,
        quantity: 3
    },
    {
        id: 4,
        img: './images/arm-chair.webp',
        title: 'Armchair',
        price: 150,
        quantity: 1
    }
]; 

const cartIcon = document.querySelector(`[data-cart-icon]`);
const cartList = document.querySelector(`[data-cart-list]`);
cartIcon.addEventListener('click',_ => {
    if(cartList.dataset.open === 'close') {
        cartList.dataset.open = 'open';
        cartList.computedStyleMap.maxHeight = cartList.scrollheight + 'px';
    } else {
        cartList.dataset.open = 'close';
        cartList.style.maxHeight = '0';
    }
});

const cartRender = _ => {
    let cartHtml = '';
    C.forEach(item => {
        const { id, img, title, price, quantity } = item;
        const cartItemHtml = `
                        <li>
                            <img src="${img}" alt="${title}">
                            <div class="info">
                                <h3>${title}</h3>
                                <p>${price.toFixed(2)} €</p>
                                <p>Quantity: ${quantity}</p>
                            </div>
                            <button data-id=${id}>X</button>
                        </li>
                        `;
        cartHtml += cartItemHtml;
    });
    if(!cartHtml) {
        cartHtml = '<li data-empty>empty cart</li>';
    }
    document.querySelector('[data-cart-list] ul').innerHTML = cartHtml;
}

const addEvents = _ => {
    document.querySelectorAll('[data-cart-list] ul li:not([data-empty])')
    .forEach(li => {
        const button = li.querySelector('button');
        button.addEventListener('click', _ => {
            const id = button.dataset.id;
            C = C.filter(item => item.id !== parseInt(id));
            cartRender();
            addEvents();
        });
    });
}

cartRender();
addEvents();


//for (let i = 0; i < C.length; i++) {
//    const item = C[i];
//    const img = item.img
//    const title = item.title;
//    const price = item.price;
//    const quantity = item.quantity;
   


