// import React from 'react'; 
import './Category.css';
//import TopLine from './TopLine';
// import header from '../img/header.svg';
// import frame1 from '../img/Frame 1.svg';
// import frame7 from '../img/Frame 7.svg';
// import frame8 from '../img/Frame 8.svg';
// import frame9 from '../img/Frame 9.svg';
// import frame10 from '../img/Frame 10.svg';
// import frame11 from '../img/Frame 11.svg';



export default function Category({CardTitle, cardImg}) {
const path="../image/";
constImgSrc='${path}${catImg}';

    return(

      <div className=''>
        <img src={cardImg} alt="" className='cardImage' />
        <h3 className='cardTitle'>{CardTitle}</h3>
      
      </div>



      //   <section className="category">
      //   <div className="category-header">
      //       <h>Shop by Category</h>
      //       <div><img src={header} alt="" /></div>
      //       {/* <hr /> */}
      //   </div>


      //   <div className="categories">
      //     <div className="sction-plant">
      //     <img className="frame" src={frame1} alt="" />
      //     <img className="frame" src={frame7} alt="" />
      //     <img className="frame" src={frame8} alt="" />
      //     <img className="frame" src={frame9} alt="" />
      //     <img className="frame" src={frame10} alt="" />
      //     <img className="frame" src={frame11} alt="" />
      //     </div>
      //   </div>
  
       
      // </section>
    );
  }
  