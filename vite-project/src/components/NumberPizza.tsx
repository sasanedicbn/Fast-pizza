
const NumberPizza = ({ pizzaCount, handleAddPizza, handleRemovePizza }) => {
    return (
        <div className="container-number-pizza">
            <button className="btn" onClick={handleAddPizza}>+</button>
            <p>{pizzaCount}</p>
            <button className="btn" onClick={handleRemovePizza}>-</button>
            <button className='menu-item-button'  onClick={handleRemovePizza}>
                Delete   
            </button>
        </div>
    );
};

export default NumberPizza;