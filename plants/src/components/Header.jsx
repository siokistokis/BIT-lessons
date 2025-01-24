import './Header.css';
import headerLogo from '../img/Logo.svg';
import SearchLogo from '../img/Search.svg';
import Vector from '../img/Vector.svg';
export default function Header() {
  return (
    <div className='header-bg'>
      <div className='wrapper header'>
      <a href="#"><img src={headerLogo} alt="logo"></img></a>

    <div className='header-links'>
    <a href="">Home</a>
    <a href="">Product</a>
    <a href="">About us</a>
    <a href="">Contact</a>

    </div>
    <div className='header-right'>
      <input type="text" />
      <img src={SearchLogo} alt="" />
      <a href="#">
      <img src={Vector} alt="" />
      </a>
    </div>
  </div>

  </div>
  )
}



