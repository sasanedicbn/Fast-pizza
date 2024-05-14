import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPizzas, getTotalCartPrice } from "../store/PizzaSlice";

const OrderBar = () => {
    const pizzaState = useSelector(state => state.pizza)
    //  console.log('pizzaState', pizzaState)
    const totalPizzas = useSelector(getTotalCartPizzas)
    const totalPrice = useSelector(getTotalCartPrice)
    // console.log(totalPrice)
 
    return(
        <div className="orderbar-container">
         <div className="orderbar-details">
          <p>{totalPizzas} PIZZAS</p>
          <p>${totalPrice.toFixed(2)} </p>
         </div>
          <Link to='/cart' className="openCart">OPEN CART <span>→</span></Link>
        </div>
    )
}
export default OrderBar;