import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import OrderBar from '../components/OrderBar';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import { FormEvent } from 'react';

const Header = () => {
    const name = useSelector((state:RootState) => state.customer.customerName);
    const pizzaSlice = useSelector((state:RootState) => state.pizza.cart);
    const showOrderBar = pizzaSlice.some((pizza) => pizza.count >= 1);
    const navigate = useNavigate(); 

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const orderId = (event.currentTarget.elements.namedItem('orderId') as HTMLInputElement).value;

        if (orderId) {
            navigate(`/order/${orderId}`);
        }
    };
    return (
        <>
            <nav className="nav-bar">
                <ul>
                    <li>FAST REACT PIZZA CO.</li>
                    <li>
                        <form onSubmit={handleSearch}> 
                            <input type="text" name="orderId" placeholder=" Search Order  #" />
                        </form>
                    </li>
                    {name && <span>{name}</span>}
                    <Link to='order/id'></Link>
                </ul>
            </nav>
            <Outlet />
            {showOrderBar && <OrderBar />}
        </>
    );
}

export default Header;
