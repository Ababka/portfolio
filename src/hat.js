import './style/hat.css';
import logo from './img/A3.png';

function Hat() {
  return (
    <div>
      <div className='ribbon'>
      <img className='branding' src={logo} />
      </div>
    </div>
  )
}

export default Hat;

// import {Link} from "react-router-dom";
// <Link to="/home"> Home </Link>