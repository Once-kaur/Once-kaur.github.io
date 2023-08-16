import '../Styles/navbar.css'
import logo from "../assets/logo.png"
function Navbar(){
    return(
        <nav className="nav1">
            <ul>
                <li><img src={logo} alt="logo" className='logo'/></li>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>MENU</li>
                <li>RESERVATIONS</li>
                <li>ORDER ONLINE</li>
                <li>LOGIN</li>
            </ul>
        </nav>
    )
}
export default Navbar