import "../Styles/footer.css"
import {BrowserRouter, Link} from "react-router-dom";
function Foot(){
    return (
        <footer>
            <div className="f1">
            {/* <section>
                <img />
            </section> */}
            <section>
                <h3>DOORMAT NAVIGATION</h3>
                <BrowserRouter>
                <nav>
                    <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>ABOUT</Link></li>
                <li><Link to='/menu'>MENU</Link></li>
                <li>RESERVATIONS</li>
                <li>ORDER ONLINE</li>
                <li>LOGIN</li>
                    </ul>
                </nav>
                </BrowserRouter>
            </section>
            <section>
                <h3>CONTACT</h3>
                <ul>
                    <li>New York,albomntom street</li>
                    <li>phone: 123489457</li>
                    <li><a href="littlelemon@gmail.com">email</a></li>
                </ul>
            </section>
            </div>
        </footer>
    )
}
export default Foot