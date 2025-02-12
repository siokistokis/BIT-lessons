import { useState, useEffect } from 'react';
import SectionHot from './SectionHot';

export default function SectionAllProducts(){
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/siokistokis/e3c9623bd35f200275868ea5d490eedd/raw/36ad7a00e93a06c3b18931b61763e9b14ee1cdf6/plantsData.json'); 
                const data = await response.json();
                    console.log(data);
               
                const allProductsWithImages = await Promise.all(data.map(async (product) => {
                        let imagePath;
                        try{
                            imagePath = await import(`../img/plants/${product.fileName}`);
                        }
                        catch(error){
                            imagePath = await import(`../img/plants/empty.svg`);
                        }

                        return {
                            ... product,
                            imageSrc: imagePath.default,
                        };
                    }));
                    // console.log(allProductsWithImages)
                setAllProducts(allProductsWithImages);
            } catch (error){
                console.error('Klaida gaunant kategorijas', error);
            }
        };
        fetchAllProducts();
    }, []);
 

    return(
        <>
        <SectionHot allProducts = {allProducts}/>
 
        </>
    );
};