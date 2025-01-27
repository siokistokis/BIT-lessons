import './Testimonials.css';

import testimonial1 from '../img/testimonial1.svg';
import testimonial2 from '../img/testimonial2.svg';
import testimonial3 from '../img/testimonial3.svg';


export default function Testimonials() {
    return(
      <section className="testemonials">
        <div className="">
            <h>Testimonials</h>
            <p>Plant parents love us</p>
        </div>


        <div className="">
          <div className="">
          <img className="feedback" src={testimonial1} alt="" />
          <img className="feedback" src={testimonial2} alt="" />
          <img className="feedback" src={testimonial3} alt="" />
          
          
          </div>
        </div>
  
       
      </section>
    );
  }
  