import './Navbar.css';
import {Link} from 'react-router-dom';
import miniLogo from './img/LogoBazarekMini.png';

const Navbar = ({click}) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo"> 
                <div alt="Go to home">
                    <img src={miniLogo}/>
                </div>
                <h2>
                    BAZAREK
                </h2>            
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                        <span className="cartLogo__badge">0</span>
                     </Link>
                </li>                
                <li>
                    <Link to="/"> Shop </Link>
                </li>                
            </ul>

            {/* hamburger menu */}   
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
