import './Hottest.css';
// import HottestBG from '../img/HottestBG.svg';
import shopAll from '../img/shopAll.svg';
import buy1 from '../img/buy1.svg';
import buy2 from '../img/buy2.svg';
import buy3 from '../img/buy3.svg';
import buy4 from '../img/buy4.svg';
import buy5 from '../img/buy5.svg';
import buy6 from '../img/buy6.svg';
import buy7 from '../img/buy7.svg';
import buy8 from '../img/buy8.svg';


export default function Hottest() {
    return(
      <section className="hottest">
        {/* <div className="hottest"><img src={HottestBG} alt="" /></div> */}
        <div className="hottest-header">
        <h>Hottest Plants</h>
        <img className="shop-all" src={shopAll} alt="" />
        <hr />
        </div>

        <div className="">

          <img className="buy" src={buy1} alt="" />
          <img className="buy" src={buy2} alt="" />
          <img className="buy" src={buy3} alt="" />
          <img className="buy" src={buy4} alt="" />
          <img className="buy" src={buy5} alt="" />
          <img className="buy" src={buy6} alt="" />
          <img className="buy" src={buy7} alt="" />
          <img className="buy" src={buy8} alt="" />
          
          </div>
       
      </section>
    );
  }
  