import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { togglePriority } from '../store/CustomerSlice';
import { useEffect, useState } from 'react';

const OrderStatus = () => {
    const [priorityPrice, setPriorityPrice] = useState(0);
    const { id } = useParams();
    const order = useSelector(state => state.pizza.cart[state.pizza.cart.length - 1]);
    const priority = useSelector(state => state.customer.priority);
    const dispatch = useDispatch();

   

    useEffect(() => {
        if (order) {
            const newPriorityPrice = priority ? order.data.orderPrice * 0.05 : 0;
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
        if(priority){
            const speedUpOrder = differenceInMinutes - 7;
            return speedUpOrder
        }
        return differenceInMinutes;
    };

    console.log(priority);

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
                        {priority && <p>Price for priority: ${priorityPrice.toFixed(2)}</p>}
                        <p>To pay on delivery: ${(order.data.orderPrice + priorityPrice).toFixed(2)}</p>
                    </>
                )}
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
