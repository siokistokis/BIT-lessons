import PlantCard from "./PlantCard";
import './HotCardList.css';

export default function HotCardList({allProducts, rating}){

    const filtredProducts = allProducts.filter(product => product.rating === rating);
 
        console.log(allProducts);

    return(
        <div className="hotCard-list">
            {allProducts.map((card) => (
                <PlantCard
                    key={card.id}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    price={card.price}
                    showDiscount={false}
                    discount={card.discount}
                    
                />
            ))}
        </div>
   
    );
};



