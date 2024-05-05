
const MenuSingleItem = ({ menuItem }) => {
    const { name, ingredients, unitPrice, imageUrl, soldOut } = menuItem;

    return (
        <div className="menu-item">
            <div className="menu-item-details">
            <div className="menu-item-image">
                <img src={imageUrl} alt={name} />
            </div>
            <div className='menu-data'>
                <h3 className="menu-item-name">{name}</h3>
                <p className="menu-item-ingredients">{ingredients.join(', ')}</p>
                <p className="menu-item-price">€{unitPrice.toFixed(2)}</p>
            </div>
            </div>
            <button className={`menu-item-button ${soldOut ? 'sold-out' : ''}`} disabled={soldOut}>
                    {soldOut ? 'SOLD OUT' : 'ADD TO CART'}
                </button>
        </div>
    );
};

export default MenuSingleItem;
