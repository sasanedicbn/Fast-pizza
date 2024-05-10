import { Link } from "react-router-dom";
import NumberPizza from "../components/NumberPizza";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, clearCart, removePizza } from "../store/NumberPizza";

const Cart = () => {
    const orderPizzas = useSelector(state => state.pizza);
    const dispatch = useDispatch()
    console.log(orderPizzas);
    function handleClearCart() {
        dispatch(clearCart())
    }
    
    
    return (
        <div>
                <div  className="cart-container">
                    <Link to='/menu' className="back-menu">← Back to menu</Link>
                    <p className="cart-name">Your cart, name</p>
                    {orderPizzas.map((pizza) => (
                    <div className="cart-details" key={pizza.id}>
                        <ul>
                            <li>{pizza.count}<span>x</span> {pizza.name}</li>
                        </ul>
                        <div className="cart-price-details">
                            <span>${((pizza.count * pizza.unitPrice).toFixed(2))}</span>
                            <NumberPizza pizzaCount={pizza.count} handleAddPizza={() => dispatch(addPizza(pizza))}
                            handleRemovePizza={() => dispatch(removePizza(pizza)) }/>
                        </div>
                    </div>
                    ))}
                    <div>
                        <button className="custom-button">ORDER PIZZAS</button>
                        <button className="custom-button clear-btn" onClick={handleClearCart}>CLEAR CART</button>
                    </div>
                </div>
        </div>
    );
};

export default Cart;
