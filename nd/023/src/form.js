import axios from 'axios';

const form = document.querySelector('#js-form');

const button = document.querySelector('button');

/*
<input type="text" name="email" placeholder="Email"> ===> input.name = 'email'
 
data.email = "email value"
 
data[input.name] = "email value"
 
 
*/

    button.addEventListener('click',_=> {

        const data = {};

        form.querySelectorAll('input').forEath(input => {
            data[input.name] = input.value;
        });
    
        console.log(data);

        axios.post('http://localhost:3000/form-js', data)
            .then(responce => {
                console.log(responce);
            })
       

    });