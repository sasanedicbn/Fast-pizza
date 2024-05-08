import { useSelector } from "react-redux";

const OrderBar = () => {
    const pizzaState = useSelector(state => state.pizza)
     console.log('pizzaState', pizzaState)
    const totalPizzas = Object.values(pizzaState).reduce((total, pizza) => total + pizza.count, 0)
    

    return(
        <div className="orderbar-container">
         <div className="orderbar-details">
          <p>{totalPizzas}</p>
          <p>$24.00</p>
         </div>
          <p className="openCart">OPEN CART  </p>
        </div>
    )
}
export default OrderBar;