// import { useDispatch, useSelector } from 'react-redux';

// import { showButton } from "../store";

const MainComponent = () => {
    // const dispatch = useDispatch()
    // const buttonVisible = useSelector(state => state.customer.button)
    // const Name = useSelector(state => state.customer.customerName)
    

    // const handleOnChange = (event) => {
    //     event.preventDefault()
    //     dispatch(showButton())
    // }
    
    // const handleCustomerName = (event) => {
    //   const name = event.target.value
    //   dispatch(getName(name))
    // }
    return (
        <div className="main-container">
            <p className="pizza-text">The best pizza.</p>
            <p className="welcome-text">Straight out of the oven, straight to you. </p>
            <p className="welcome-instruction">👋 Welcome! Please start by telling us your name:</p>
            <form >
            <input
                type="text"
                className="input-field"
                placeholder="Your full name" 
                // value={Name}
                // onChange={handleOnChange}
            />
             {/* {buttonVisible && <button>START ORDERING</button>} */}
            </form>
           
        </div>
    );
}

export default MainComponent;
