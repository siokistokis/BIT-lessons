import { useState, useEffect } from 'react';
import './CategoriesList.css';
import Category from './Category';

export default function CategoriesList(){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/siokistokis/fb22aa7ae72b278cb95b1926093413e6/raw/090407e436086dd3fc6c5310e96559c6b2c99424/plant.json');
                const data = await response.json();
                    console.log(data);
               
                const categoriesWithImages = await Promise.all(data.map(async (category) => {
                        const imagePath = await
                        import(`../img/category/${category.fileName}`);
                        return {
                            ... category,
                            imageSrc: imagePath.default,
                        };
                    }));
                setCategories(categoriesWithImages);
            } catch (error){
                console.error('Klaida gaunant kategorijas', error);
            }
        };
        fetchCategories();
    }, []);
 

    return(
        <div className='categories-list'>
            {
                categories.map((category) =>(
                    <Category
                        key={category.id}
                        imageSrc={category.imageSrc}
                        title ={category.title}
                    />
                ))
            }
 
        </div>
    )
}