import { useParams } from 'react-router-dom';

const OrderStatus = () => {
    const { id } = useParams();
    console.log('ID', id)
    return (
        <div>
            <h1>Order Status</h1>
            <p>Order ID: {id}</p>
        </div>
    );
};

export default OrderStatus;
