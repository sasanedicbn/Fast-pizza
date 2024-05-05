import { useDispatch, useSelector } from 'react-redux';
import { getName } from '../store/CustomerSlice';
import { useState } from 'react';


const MainComponent = () => {
    const [showButton, setShowButton] = useState(false)
    const dispatch = useDispatch();
    const Name = useSelector(state => state.customer.customerName);

    const handleOnChange = (event) => {
        event.preventDefault();
        // Dispatch any action needed when input changes, such as showing a button
    };

    const handleCustomerName = (event) => {
        const name = event.target.value;
        dispatch(getName(name)); 
        setShowButton(true)
    };

    return (
        <div className="main-container">
            <p className="pizza-text">The best pizza.</p>
            <p className="welcome-text">Straight out of the oven, straight to you. </p>
            <p className="welcome-instruction">👋 Welcome! Please start by telling us your name:</p>
            <form onSubmit={handleOnChange}>
                <input
                    type="text"
                    className="input-field"
                    placeholder="Your full name"
                    value={Name}
                    onChange={handleCustomerName} 
                />
              
                {showButton && <button className='custom-buttons'>START ORDERING</button>}
            </form>
        </div>
    );
};

export default MainComponent;
