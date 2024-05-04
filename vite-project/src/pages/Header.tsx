import { Outlet } from 'react-router-dom';

const Header = () => {
    return(
        <>
        <nav className="nav-bar">
            <ul>
                <li>FAST REACT PIZZA CO.</li>
                <li><input type="text" placeholder=" Search Order  #"/></li>
            </ul>
        </nav>
        <Outlet/>
         </>
    )
}
export default Header;