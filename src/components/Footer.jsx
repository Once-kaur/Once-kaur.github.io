import "../Styles/footer.css"
import logo2 from "../assets/logo2.png"
import {BrowserRouter, Link} from "react-router-dom";
function Foot(){
    return (
        <footer>
            <div className="f1">
            <section>
                <img  className="ig2"src={logo2} />
            </section>
            <section>
                <h3>DOORMAT NAVIGATION</h3>
                <nav>
                    <ul>
                <Link to="/">HOME</Link><br/>
                <Link to="/about">ABOUT</Link><br/>
                <Link to="/reservation">RESERVATIONS</Link><br/>
                <Link to="/login">LOGIN</Link><br/>
                    </ul>
                </nav>
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