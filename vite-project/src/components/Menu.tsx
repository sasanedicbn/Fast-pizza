import { useEffect, useState } from "react";
import MenuSingleItem from "./MenuSingleItem";
import { useDispatch, useSelector } from "react-redux";
import { getLoader } from "../store/Global/GlobalLoaderSlice";
import Loader from "./Loader";

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const isLoading = useSelector(state => state.loader.loader); 
   console.log(isLoading)
    const dispatch  = useDispatch();

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                dispatch(getLoader(true));
                const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/menu`);
                if (!response.ok) {
                    throw new Error('Failed to fetch menu');
                }
                const data = await response.json();
                setMenuItems(data.data);
            } catch (error) {
                console.error('Error fetching menu:', error);
            } finally {
                dispatch(getLoader(false));
            }
        };

        fetchMenu(); 
    }, []); 
    console.log(menuItems)
    return (
        <div className="menu-main-container">
            {isLoading ? <Loader/> : ( 
                <ul>
                    {menuItems.map((menuItem, index) => (
                        <MenuSingleItem key={index} menuItem={menuItem}/>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Menu;
