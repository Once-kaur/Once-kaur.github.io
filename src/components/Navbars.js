import '../Styles/navbar.css'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
function Navbar(){
    return(
        <nav className="nav1">
            <ul>
                <li><img src={logo} alt="logo" className='logo'/></li>
                {/* <li>HOME</li>
                <li>ABOUT</li>
                <li>MENU</li>
                <li>RESERVATIONS</li>
                <li>ORDER ONLINE</li>
                <li>LOGIN</li> */}
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/reservation">RESERVATIONS</Link>
                <Link to="/login">LOGIN</Link>
            </ul>
        </nav>
    )
}
export default Navbar
 {/* <ul> */}
                {/* <li><img src={logo} alt="logo" className='logo'/></li> */}
                {/* <Link to="/">HOME</Link> */}
                // <Link to="/about">ABOUT</Link>
                {/* <Link to="/menu">MENU</Link>
                <Link to="/reservations">RESERVATIONS</Link>
                <Link to="/order online">ORDER ONLINE</Link>
                <Link to="/login">LOGIN</Link> */}
            {/* </ul> */}