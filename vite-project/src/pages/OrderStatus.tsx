import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { togglePriority } from '../store/CustomerSlice';
import { useEffect, useState } from 'react';
import { RootState } from '../store/store';

interface PizzaData {
  id: string;
  name: string;
  quantity: number;
  totalPrice: number;
}

interface OrderData {
  orderPrice: number;
  estimatedDelivery: string;
  cart: PizzaData[];
}

const OrderStatus = () => {
    const { id } = useParams<{ id: string }>(); 
    const priority = useSelector((state: RootState) => state.customer.priority);
    const dispatch = useDispatch();
    const [priorityPrice, setPriorityPrice] = useState<number>(0); 
    const [order, setOrder] = useState<OrderData | null>(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/order/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch order');
                }
                const data: { data: OrderData } = await response.json(); 
                console.log('data', data);
                setOrder(data.data); 
            } catch (error) {
                console.error('Error fetching order:', error);
            }
        };

        fetchOrder();
    }, [id]);

    useEffect(() => {
        if (order) {
            const newPriorityPrice = priority ? order.orderPrice * 0.05 : 0; 
            setPriorityPrice(newPriorityPrice);
        }
    }, [priority, order]);

    const formatEstimatedDelivery = (estimatedDelivery: string) => {
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

    const calculateRemainingMinutes = (estimatedDelivery: string) => {
        const now = new Date();
        const deliveryTime = new Date(estimatedDelivery);
        const differenceInMillis = deliveryTime.getTime() - now.getTime(); 
        const differenceInMinutes = Math.ceil(differenceInMillis / 60000);
        if(order) {
          return  differenceInMinutes - 8
        }
        return differenceInMinutes;
       
    };

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
                        <p>Only {calculateRemainingMinutes(order.estimatedDelivery)} minutes left</p>
                        <p>({formatEstimatedDelivery(order.estimatedDelivery)})</p>
                    </>
                )}
            </div>
            <div className='order-pizzas'>
                {order && order.cart.map((pizza) => (
                    <div key={pizza.id} className='order-pizza'>  
                        <p>{pizza.quantity}x {pizza.name}</p>
                        <p>Total Price: ${pizza.totalPrice}</p>
                    </div>
                ))}
            </div>
            <div className='order-price'>
                {order && (
                    <>
                        <p>Price per pizza: ${order.orderPrice}</p>
                        {priority && <p>Price for priority: ${priorityPrice.toFixed(2)}</p>}
                        <p>To pay on delivery: ${(order.orderPrice + priorityPrice).toFixed(2)}</p>
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
