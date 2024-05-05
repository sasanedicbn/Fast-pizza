import { useEffect, useState } from "react";
import MenuSingleItem from "./MenuSingleItem";

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/menu`);
                if (!response.ok) {
                    throw new Error('Failed to fetch menu');
                }
                const data = await response.json();
                setMenuItems(data.data);
            } catch (error) {
                console.error('Error fetching menu:', error);
            }
        };

        fetchMenu(); 
    }, []); 
console.log(menuItems)
    return (
        <div>
            <h2>Menu Items</h2>
            <ul>
                {menuItems.map((menuItem, index) => (
                    <MenuSingleItem key={index} menuItem={menuItem}/>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
