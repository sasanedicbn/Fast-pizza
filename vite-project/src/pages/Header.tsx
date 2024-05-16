import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import OrderBar from '../components/OrderBar';
import { Link } from 'react-router-dom';

const Header = () => {
    const name = useSelector(state => state.customer.customerName);
    const pizzaSlice = useSelector(state => state.pizza.cart);
    const showOrderBar = pizzaSlice.some((pizza) => pizza.count >= 1);
    const navigate = useNavigate(); 

    const fetchOrder = async (id) => {
        try {
            const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/order/${id}`);

            if (!response.ok) {
                throw new Error('Error while submitting the form');
            }

            const responseData = await response.json();
            console.log(responseData)
            navigate(`/order/${id}`);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleSearch = (event) => {
        event.preventDefault()
        const orderId = event.target.orderId.value;

        if (orderId) {
            fetchOrder(orderId)
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
