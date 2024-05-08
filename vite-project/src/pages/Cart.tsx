import NumberPizza from "../components/NumberPizza"

const Cart = () => {
    return(
        <div className="cart-container">
            <p>Back to menu</p>
            <p>Your cart, name</p>
            <div className="cart-details">
              <p>2X Margarita</p>
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