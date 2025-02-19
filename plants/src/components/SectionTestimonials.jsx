
import './SectionTestimonials.css';
import { useEffect, useState } from 'react';

export default function SectionTestimonials(){

    const[testimonials, SectionTestimonials] = useState([]);
    useEffect(() => {
        const fetchAllTestimonials = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/siokistokis/5a887c9956902b77ff8d39168f726e94/raw/fcab0a70af66b7b01bf54597482990b15ff4da8c/testimonials.json')
                const data = await response.json();
                    console.log(data);

                const allTestimonialsWithImages = await Promise.all(data.map(async(testimonials) => {
                    let imagePath;
                    try{
                        imagePath = await import('../img/clients/${testimonials}')
                    }
                    catch(error){
                        imagePath = await import('../img/clients/clear.jpg')
                    }

                    return {
                        ... testimonial,
                        imageSrc: imagePath.default,
                    };
                }));
                console.log(allTestimonialsWithImages);
                setTestimonials(allTestimonialsWithImages);
            } catch (error){
                console.error('Klaida gaunant visus atsiliepimus', error);
            }
        }
    })


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
        <div className="light-bg">
            <div className="wraper testemonials-section">
                <h2 className="test-title">Testemonials</h2>
                <p className="test-text">Plant parens love as</p>
            </div>  
        
        </div>
   
    );
};