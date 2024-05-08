import { Link } from "react-router-dom"
import NumberPizza from "../components/NumberPizza"

const Cart = () => {
    return(
        <div className="cart-container">
            <Link to='/menu' className="back-menu">← Back to menu</Link>
            <p className="cart-name">Your cart, name</p>
            <div className="cart-details">
              <ul>
               <li>2X Margarita</li>
              </ul>
              <div>
                 <NumberPizza/>
              </div>
            </div>
            <div>
                <button className="custom-button">ORDER PIZZAS</button>
                <button className="custom-button clear-btn">CLEAR CART</button>
            </div>

        </div>
    )
}
export default Cart