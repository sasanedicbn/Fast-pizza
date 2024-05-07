const NumberPizza = () => {
    const dispatch = useDispatch();
    const pizzaCount = useSelector(state => state.pizza.pizza);

    const handleAddPizza = () => {
        dispatch(addPizza());
    };

    const handleRemovePizza = () => {
        if (pizzaCount > 0) {
            dispatch(removePizza());
        }
    };
    return(
    <div className="container-number-pizza">
     <button className="btn">+</button>
     <p>{1}</p>
     <button className="btn">-</button>
     <button className='menu-item-button'>
       Delete   
     </button>
    </div>
    )
}
export default NumberPizza;