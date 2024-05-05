import { useDispatch } from 'react-redux';
import { getName } from '../store/CustomerSlice';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';


const MainComponent = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleUserName = (event) => {
        setUserName(event.target.value)
    }

    const handleCustomerName = (event) => {
        event.preventDefault()
        dispatch(getName(userName)); 
        navigate('/menu')

    };
    console.log(userName)

    return (
        <div className="main-container">
            <p className="pizza-text">The best pizza.</p>
            <p className="welcome-text">Straight out of the oven, straight to you. </p>
            <p className="welcome-instruction">👋 Welcome! Please start by telling us your name:</p>
            <form onSubmit={handleCustomerName}>
                <input
                    type="text"
                    className="input-field"
                    placeholder="Your full name"
                    value={userName}
                    onChange={handleUserName} 
                />
                {userName && <button type='submit' className='custom-button'>START ORDERING</button>}
            </form>
        </div>
    );
};

export default MainComponent;
