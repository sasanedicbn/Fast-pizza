import { useDispatch, useSelector } from 'react-redux';
import { getName } from '../store/CustomerSlice';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ContinueOrdering from '../components/ContinueOrdering';
import { getTotalCartPizzas } from '../store/PizzaSlice';
import { RootState, AppDispatch } from '../store/Global';

const MainComponent = () => {
    const [userName, setUserName] = useState<string>('');
    const name = useSelector((state: RootState) => state.customer.customerName);
    const cartPizzasCount = useSelector(getTotalCartPizzas);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleCustomerName = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(getName(userName));
        navigate('/menu');
    };

    return (
        <div className="main-container">
            <p className="pizza-text">The best pizza.</p>
            <p className="welcome-text">Straight out of the oven, straight to you. </p>
            <p className="welcome-instruction">👋 Welcome! Please start by telling us your name:</p>
            <form onSubmit={handleCustomerName}>
               { name ? <ContinueOrdering/> : <input
                    type="text"
                    className="input-field"
                    placeholder="Your full name"
                    value={userName}
                    onChange={handleUserName}
                />}
                { userName && <button type='submit' className='custom-button'>START ORDERING</button>}
            </form>
            {cartPizzasCount > 0 && (
                <div className="cart-summary">
                    <p>You have {cartPizzasCount} {cartPizzasCount === 1 ? 'pizza' : 'pizzas'} in your cart.</p>
                </div>
            )}
        </div>
    );
};

export default MainComponent;
