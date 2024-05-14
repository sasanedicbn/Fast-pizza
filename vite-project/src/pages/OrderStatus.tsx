import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const OrderStatus = () => {
    const { id } = useParams();
    console.log('ID', id);
    const order = useSelector(state => state.pizza.cart[state.pizza.cart.length - 1]);
    console.log('orderStatus', order);
    const formatEstimatedDelivery = (estimatedDelivery) => {
        const date = new Date(estimatedDelivery);
        const formattedDate = date.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
        return `Estimated delivery: ${formattedDate}`;
    };
    

    return (
        <div className='container-orderStatus'>
            <div className='order-status'>
                <p>Order #{id} status</p>
                <div>
                 <button>PRIORITY</button>
                 <button>PREPARING ORDER</button>
                </div>
            </div>
            <div className='order-time'>
                <p>Only 30 minutes left</p>
                <p>{order && order.data.estimatedDelivery}</p>
            </div>
            <div className='order-pizzas'>
                {order && order.data.cart.map((pizza) => (
                    <div key={pizza.id} className='order-pizza'>  
                            <p>{pizza.quantity}x {pizza.name}</p>
                            <p>Total Price: {pizza.totalPrice}</p>
                    </div>
                ))}
            </div>
            <div className='order-price'>
               <p>Price per pizza: 212</p>
               <p>Price for priority</p>
               <p>To pay on delivery: €133.00</p>
             </div>
             <button className='order-priority'>MAKE PRIORITY</button>
        </div>
    );
};

export default OrderStatus;
