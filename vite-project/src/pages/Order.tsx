import {useForm, SubmitHandler} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'; 


const schema =  z.object({
    firstName:z.string().min(1),
    phoneNumber:z.string().min(6),
    location:z.string().min(4),
})
type FormFields = z.infer<typeof schema>;

const Order = () => {
  
    const {register, handleSubmit, formState: {errors}} = useForm<FormFields>({resolver: zodResolver(schema)})

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)
    }
    return(
        <div className="order-container">
            <h2>Ready to order? Let's go!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input {...register("firstName")} type="text" id="firstName" />
                    <span>{errors.firstName?.message}</span>
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input  {...register("phoneNumber")} type="text" id="phoneNumber" />
                    <span>{errors.phoneNumber?.message}</span>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input  {...register("location")} type="text" id="location" />
                    <button className="btn-position">Get Position</button>
                    <span>{errors.location?.message}</span>
                </div>
                <div>
                    <input type="checkbox" id="priorityOrder" />
                    <label htmlFor="priorityOrder">Want to give your order priority?</label>
                </div>
                <button type='submit'>ORDER NOW FOR PRICE</button>
            </form>
        </div>
    )
}

export default Order;
