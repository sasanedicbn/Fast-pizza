import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Header = () => {
    const name = useSelector(state => state.customer.customerName)
    // console.log( name)
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
         </>
    )
}
export default Header;