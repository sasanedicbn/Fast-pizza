import { Link } from "react-router-dom";
import NumberPizza from "../components/NumberPizza";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, clearCart, removePizza } from "../store/PizzaSlice";

const Cart = () => {
    const orderPizzas = useSelector(state => state.pizza);
    const customerName = useSelector(state => state.customer.customerName)
    const dispatch = useDispatch();

    function handleClearCart() {
        dispatch(clearCart());
    }

    return (
        <div>
            <div className="cart-container">
                <Link to='/menu' className="back-menu">← Back to menu</Link>
                {orderPizzas.length === 0 ? (
                    <p className="empy-cart">Your cart is still empty. Start adding some pizzas :).</p>
                ) : (
                    <>
                        <p className="cart-name">Your cart, {customerName}</p>
                        {orderPizzas.cart.map((pizza) => (
                            <div className="cart-details" key={pizza.id}>
                                <ul>
                                    <li>{pizza.count}<span>x</span> {pizza.name}.</li>
                                </ul>
                                <div className="cart-price-details">
                                    <span>${((pizza.count * pizza.unitPrice).toFixed(2))}</span>
                                    <NumberPizza 
                                        pizzaCount={pizza.count} 
                                        handleAddPizza={() => dispatch(addPizza(pizza))}
                                        handleRemovePizza={() => dispatch(removePizza(pizza))}
                                    />
                                </div>
                            </div>
                        ))}
                        <div>
                            <Link to={'/order/new'} className="custom-button">ORDER PIZZAS</Link>
                            <button className="custom-button clear-btn" onClick={handleClearCart}>CLEAR CART</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
