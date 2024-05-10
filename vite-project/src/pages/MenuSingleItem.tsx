import { useDispatch, useSelector } from "react-redux";
import NumberPizza from "../components/NumberPizza";
import { addPizza, removePizza } from "../store/NumberPizza";

const MenuSingleItem = ({ menuItem }) => {
    const { id, name, ingredients, unitPrice, imageUrl, soldOut } = menuItem;
    
    const pizzaInCart = useSelector(state => state.pizza.find(pizza => pizza.id === id));
    const pizzaCount = pizzaInCart ? pizzaInCart.count : 0;
    
    const dispatch = useDispatch();
    
    const handleAddPizza = () => {
        dispatch(addPizza(menuItem));
    };

    const handleRemovePizza = () => {
        dispatch(removePizza(menuItem));
    };
  
    return (
        <div className="menu-item">
            <div className="menu-item-details">
                <div className="menu-item-image">
                    <img src={imageUrl} alt={name} />
                </div>
                <div className='menu-data'>
                    <h3 className="menu-item-name">{name}</h3>
                    <p className="menu-item-ingredients">{ingredients.join(', ')}</p>
                    <p className="menu-item-price">€{unitPrice.toFixed(2)}</p>
                </div>
            </div>
            {pizzaCount > 0 ? (
                <NumberPizza
                    pizzaCount={pizzaCount}
                    handleAddPizza={handleAddPizza}
                    handleRemovePizza={handleRemovePizza}
                />
            ) : (
                <button onClick={handleAddPizza} className={`menu-item-button ${soldOut ? 'sold-out' : ''}`} disabled={soldOut}>
                    {soldOut ? 'SOLD OUT' : 'ADD TO CART'}      
                </button>
            )}
        </div>
    );
};

export default MenuSingleItem;
