import './BestSelling.css';
import card3 from '../img/Card 3.svg';
import card6 from '../img/Card 6.svg';
import card7 from '../img/Card 7.svg'


export default function Category() {
    return(
      <section className="best-selling">
        <div className="">
        <h>Best Selling</h>
        <a href="#" className="shop-all"> SHOP ALL  </a>
        <hr />
        </div>

        <div className="cards-best-selling">
          <img className="shop-now" src={card3} alt="" />
          <img className="shop-now" src={card6} alt="" />
          <img className="shop-now" src={card7} alt="" />
          
          </div>
       
      </section>
    );
  }
  