import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { togglePriority } from '../store/CustomerSlice';
import { useEffect, useState } from 'react';

const OrderStatus = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const order = useSelector(state => state.pizza.order); // Dohvaćanje narudžbe iz Redux store-a
    const priority = useSelector(state => state.customer.priority);
    const [priorityPrice, setPriorityPrice] = useState(0);

    useEffect(() => {
        if (order) {
            const newPriorityPrice = priority ? order.orderPrice * 0.05 : 0;
            setPriorityPrice(newPriorityPrice);
        }
    }, [priority, order]);

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
        if (priority) {
            const speedUpOrder = differenceInMinutes - 7;
            return speedUpOrder;
        }
        return differenceInMinutes;
    };

    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container-orderStatus'>
            <div className='order-status'>
                <p>Order #{id} status</p>
                <div>
                    {priority && <button>PRIORITY</button>}
                    <button>PREPARING ORDER</button>
                </div>
            </div>
            <div className='order-time'>
                <>
                    <p>Only {calculateRemainingMinutes(order.estimatedDelivery)} minutes left</p>
                    <p>({formatEstimatedDelivery(order.estimatedDelivery)})</p>
                </>
            </div>
            <div className='order-pizzas'>
                {order.cart.map((pizza) => (
                    <div key={pizza.id} className='order-pizza'>  
                        <p>{pizza.quantity}x {pizza.name}</p>
                        <p>Total Price: ${pizza.totalPrice}</p>
                    </div>
                ))}
            </div>
            <div className='order-price'>
                <>
                    <p>Price per pizza: ${order.orderPrice}</p>
                    {priority && <p>Price for priority: ${priorityPrice.toFixed(2)}</p>}
                    <p>To pay on delivery: ${(order.orderPrice + priorityPrice).toFixed(2)}</p>
                </>
            </div>
            {!priority && (
                <button 
                    className='order-priority' 
                    onClick={() => dispatch(togglePriority(!priority))}
                >
                    MAKE PRIORITY
                </button>
            )}
        </div>
    );
};

export default OrderStatus;
