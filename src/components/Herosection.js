import Header from "./Header";
import "../Styles/hero.css"
import Foot from "../components/Footer"
import "../Styles/highlight.css"
import bruschetta from "../assets/bruschetta.jpg"
import salad from "../assets/salad.jpg"
import dessert from "../assets/dessert.jpg"
function Hero()
{
    return (
        <div className="a1">
            <section className="sec1">
            <h1>LITTLE LEMON</h1>
            <p1 className='p1'>Welcome to Little Lemon, a culinary haven where flavor and creativity intertwine to offer you an unforgettable dining experience. Nestled in the heart of the city, Little Lemon is not just a restaurant, but a celebration of exquisite tastes, warm ambiance, and exceptional service.</p1>
            <br/>
            <button type="submit" className="b1">RESERVE A TABLE</button>
            </section>
            <section className="sec2">
                <img className="imj"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQzTxS6B7igDfGfXRU_RVyKfjG5tBMFlb7g&usqp=CAU"/>
            </section>
        </div>
    )
}
export default Hero