import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import OrderBar from '../components/OrderBar';

const Header = () => {
    const name = useSelector(state => state.customer.customerName)
    const pizzaSlice = useSelector(state => state.pizza)
    console.log('hhh', pizzaSlice)
    const showOrderBar = pizzaSlice.some((pizzaSlice) => pizzaSlice.count >= 1) 

    return(
        <>
        <nav className="nav-bar">
            <ul>
                <li>FAST REACT PIZZA CO.</li>
                <li><input type="text" placeholder=" Search Order  #"/></li>
                {name && <span>{name}</span>}
            </ul>
        </nav>
        <Outlet/>
         {showOrderBar && <OrderBar/>}
         </>
    )
}
export default Header;