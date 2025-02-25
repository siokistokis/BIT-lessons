

import './SectionTestimonials.css';
import { useEffect, useState } from 'react';
import TestimonialsList from './TestimonialsList';

export default function SectionTestimonials(){
    
    const [testimonials, setTestimonials] = useState([]);
    
        useEffect(() => {
            const fetchAllTestimonials = async () => {
                try {
                    const response = await fetch('https://gist.githubusercontent.com/siokistokis/5a887c9956902b77ff8d39168f726e94/raw/fcab0a70af66b7b01bf54597482990b15ff4da8c/testimonials.json');
                    const data = await response.json();
                        console.log(data);
                    
                    const allTestimonialsWithImages = await Promise.all(data.map(async (testimonial) => {
                            let imagePath;
                            try{
                                imagePath = await import(`../img/clients/${testimonial.img}`);
                            }
                            catch(error){
                                imagePath = await import(`../img/clients/clear.jpg`);
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
            };
            fetchAllTestimonials();
        }, []);
    



    return (
        <div className="light-bg">
            <div className="wrapper testimonials-section">
                <h2 className='test-title'>Testimonials</h2>
                <p className='test-text'>Plant parents love us</p>
                <TestimonialsList testimonials={testimonials}/>
            </div>
        </div>

    );
}