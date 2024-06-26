import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCartPrice, orderSuccess } from '../store/PizzaSlice';
import { useNavigate } from 'react-router-dom';
import { togglePriority } from '../store/CustomerSlice';
import { RootState } from '../store/store';

const schema = z.object({
    customer: z.string().min(1).max(50),
    phone: z.string().min(4),
    address: z.string().min(2).max(100),
    priority: z.boolean(),
});

type FormFields = z.infer<typeof schema>;

const Order = () => {
    const cart = useSelector((state: RootState) => state.pizza.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const totalPrice = useSelector(getTotalCartPrice);
    const priority = useSelector((state: RootState) => state.customer.priority);

    const priorityFee = priority ? totalPrice * 0.05 : 0;
    const finalPrice = totalPrice + priorityFee;

    const [address, setAddress] = useState('');

    const onSubmit: SubmitHandler<FormFields> = async (formData) => {
        try {
            const formattedCart = cart.map(pizza => ({
                pizzaId: pizza.id,
                name: pizza.name,
                quantity: pizza.count,
                unitPrice: pizza.unitPrice,
                totalPrice: pizza.count * pizza.unitPrice
            }));

            const response = await fetch(`https://react-fast-pizza-api.onrender.com/api/order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customer: formData.customer,
                    phone: formData.phone,
                    address: address || formData.address,
                    position: "",
                    priority: priority,
                    cart: formattedCart,
                }),
            });

            if (!response.ok) {
                throw new Error('Error while submitting the form');
            }

            const responseData = await response.json();

            dispatch(orderSuccess(responseData));
            navigate(`/order/${responseData.data.id}`);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({ resolver: zodResolver(schema) });

    const getGeolocation = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            try {
                const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=23a16550edbe4d209f428d8a82af95cf`);
                const data = await response.json();
                const city = data.results[0].components.city;
                const country = data.results[0].components.country;
                const location = `${city}, ${country}`;
                setAddress(location);
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        }, (error) => {
            console.error('Error getting geolocation:', error);
        });
    };

    return (
        <div className="order-container">
            <h2>Ready to order? Let's go!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="customer">First Name</label>
                    <input {...register("customer")} type="text" id="customer" />
                </div>
                <span className='error-message'>{errors.customer?.message}</span>
                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input  {...register("phone")} type="text" id="phone" />
                </div>
                <span className='error-message'>{errors.phone?.message}</span>
                <div>
                    <label htmlFor="address">Location</label>
                    <input {...register("address")} type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <button type="button" className='btn-location' onClick={getGeolocation}>Get Location</button>
                </div>
                <span className='error-message'>{errors.address?.message}</span>
                <div>
                    <input type="checkbox" id="priority" {...register("priority")} onChange={(e) => dispatch(togglePriority(e.target.checked))} />
                    <label htmlFor="priority" className='priority'>Want to give your order priority?</label>
                </div>
                <span className='error-message'>{errors.priority?.message}</span>
                <button type='submit' className='order-now'>ORDER NOW FOR ${finalPrice.toFixed(2)}</button>
            </form>
        </div>
    );
};

export default Order;
