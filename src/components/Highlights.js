import "../Styles/highlight.css"
import bruschetta from "../assets/bruschetta.jpg"
import salad from "../assets/salad.jpg"
import dessert from "../assets/dessert.jpg"
function Highlight()
{
    return(
        <div>
            <div>
                <h1 className="spc">SPECIALS</h1>
            </div>
            <div className="a2">
            <section>
                <article>
                    <img src={salad}className="img1"/>
                    <h1>GREEK SALAD</h1>
                    <p1>Indulge in the vibrant flavors of the Mediterranean with our exquisite Greek Salad, a timeless classic served fresh at our restaurant. Each bite is a symphony of crisp cucumbers, juicy tomatoes, and tangy Kalamata olives, meticulously combined with creamy feta cheese and a sprinkle of aromatic oregano.</p1>
                </article>
            </section>
            <section>
                <article>
                    <img className="img1"src={bruschetta} alt="bruschetta"/>
                    <h1>BRUSCHETTA</h1>
                    <p1>Elevate your culinary experience with our delectable Bruschetta, a timeless Italian appetizer reimagined at our restaurant. Savor the harmony of toasted artisanal bread, rubbed gently with garlic and drizzled with the finest extra virgin olive oil</p1>
                </article>
            </section>
            <section>
                <article>
                    <img className="img2"src={dessert}/>
                    <h1>LEMON DESSERT</h1>
                    <p1>Indulge in the captivating allure of our Lemon Dessert, a tantalizing finale to your dining experience at our establishment. Immerse yourself in the zesty embrace of velvety lemon curd, its citrusy tang delicately balanced with just the right amount of sweetness. Nestled atop a buttery, crumbly crust, the lemon curd exudes a vibrant hue that mirrors the radiance of sunshine. </p1>
                </article>
            </section>
            </div>
        </div>
    )
}
export default Highlight