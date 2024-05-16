import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const OrderStatus = () => {
    const { id } = useParams();
    const order = useSelector(state => state.pizza.cart[state.pizza.cart.length - 1]);
   

    const formatEstimatedDelivery = (estimatedDelivery) => {
        const date = new Date(estimatedDelivery);
        const formattedDate = date.toLocaleString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true 
        });
        return `Estimated delivery: ${formattedDate}`;
    };

    const calculateRemainingMinutes = (estimatedDelivery) => {
        const now = new Date();
        const deliveryTime = new Date(estimatedDelivery);
        const differenceInMillis = deliveryTime - now;
        const differenceInMinutes = Math.ceil(differenceInMillis / 60000);
        return differenceInMinutes;
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
                {order && (
                    <>
                        <p>Only {calculateRemainingMinutes(order.data.estimatedDelivery)} minutes left</p>
                        <p>({formatEstimatedDelivery(order.data.estimatedDelivery)})</p>
                    </>
                )}
            </div>
            <div className='order-pizzas'>
                {order && order.data.cart.map((pizza) => (
                    <div key={pizza.id} className='order-pizza'>  
                        <p>{pizza.quantity}x {pizza.name}</p>
                        <p>Total Price: ${pizza.totalPrice}</p>
                    </div>
                ))}
            </div>
            <div className='order-price'>
                {order && (
                    <>
                        <p>Price per pizza: ${order.data.orderPrice}</p>
                        <p>Price for priority: ${order.data.priorityPrice}</p>
                        <p>To pay on delivery: ${order.data.orderPrice + order.data.priorityPrice}</p>
                    </>
                )}
            </div>
            <button className='order-priority'>MAKE PRIORITY</button>
        </div>
    );
};

export default OrderStatus;
