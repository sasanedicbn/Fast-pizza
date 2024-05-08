import { Link } from "react-router-dom"
import NumberPizza from "../components/NumberPizza"

const Cart = () => {
    return(
        <div className="cart-container">
            <Link to='/menu'>Back to menu</Link>
            <p>Your cart, name</p>
            <div className="cart-details">
              <ul>
               <li>2X Margarita</li>
              </ul>
              <div>
                 <NumberPizza/>
              </div>
            </div>
            <div>
                <button>ORDER PIZZAS</button>
                <button>CLEAR CART</button>
            </div>

        </div>
    )
}
export default Cart