import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderBar = () => {
    const pizzaState = useSelector(state => state.pizza)
     console.log('pizzaState', pizzaState)
    const totalPizzas = Object.values(pizzaState).reduce((total, pizza) => total + pizza.count, 0)
    const totalPrice = Object.values(pizzaState).reduce((total,pizza) => total + (pizza.count * pizza.unitPrice), 0)
    console.log(totalPrice)
 
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