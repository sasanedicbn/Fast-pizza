import {useForm, SubmitHandler} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'; 
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCartPrice, orderSuccess } from '../store/PizzaSlice';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const schema = z.object({
    firstName: z.string().min(1).max(50), 
    phoneNumber: z.number().min(4),
    location: z.string().min(2).max(100), 
    priorityOrder: z.boolean(), 
});

type FormFields = z.infer<typeof schema>;

const Order = () => {
    // const { id } = useParams(); 
    const dispatch = useDispatch()
    const navigate = useNavigate()
//    console.log(id)
//    UNDEFINED MI JE ID JER NEMAM NA OVOME :ID ON JE NA ORDERSTATUS COMPOENNTI


const onSubmit: SubmitHandler<FormFields> = async (formData) => {
    try {
        const response = await fetch(`http://react-fast-pizza-api.onrender.com/api/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Error while submitting the form');
        }

        const responseData = await response.json();

        navigate(`/order/${responseData.id}`);
    } catch (error) {
        console.error('Error:', error);
    }
};

    const totalPrice = useSelector(getTotalCartPrice)
    const {register, handleSubmit, formState: {errors}} = useForm<FormFields>({resolver: zodResolver(schema)})

    return(
        <div className="order-container">
            <h2>Ready to order? Let's go!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input {...register("firstName")} type="text" id="firstName" />
                   
                </div>
                <span className='error-message'>{errors.firstName?.message}</span>
                <div>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input  {...register("phoneNumber",{valueAsNumber:true})} type="text" id="phoneNumber" />
                </div>
                <span className='error-message'>{errors.phoneNumber?.message}</span>
                <div>
                    <label htmlFor="location">Location</label>
                    <input  {...register("location")} type="text" id="location" />
                    {/* <button className="btn-position">Get Position</button> */}
                </div>
                <span className='error-message'>{errors.location?.message}</span>
                <div>
                   <input type="checkbox" id="priorityOrder" {...register("priorityOrder")} />
                     <label htmlFor="priorityOrder" className='priorityOrder'>Want to give your order priority?</label>
                </div>
                <span className='error-message'>{errors.priorityOrder?.message}</span>
                <button type='submit' className='order-now'>ORDER NOW FOR ${totalPrice.toFixed(2)}</button>
            </form>
        </div>
    )
}

export default Order;
