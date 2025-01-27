import './Deals.css';
import Deal from '../img/Deal.svg';
import deal1 from '../img/deal1.svg';
import deal2 from '../img/deal2.svg';
import deal3 from '../img/deal3.svg';
import deal4 from '../img/deal4.svg';


export default function Deals() {
    return(
      <section className="">
        <div className="">
            <h>Ferntastic</h>
            <div><img src={Deal} alt="" /></div>
            <hr />
        </div>


        <div className="">
          <div className="">
          <img className="deal" src={deal1} alt="" />
          <img className="deal" src={deal2} alt="" />
          <img className="deal" src={deal3} alt="" />
          <img className="deal" src={deal4} alt="" />
          
          </div>
        </div>
  
       
      </section>
    );
  }
  