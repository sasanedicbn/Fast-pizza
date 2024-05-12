import {useForm, SubmitHandler} from 'react-hook-form'

type FormFields ={
    firstName:string,
    phoneNumber:number,
    location:string,
}
const Order = () => {
  
    const {register, handleSubmit} = useForm<FormFields>()

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
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input  {...register("phoneNumber")} type="text" id="phoneNumber" />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input  {...register("location")} type="text" id="location" />
                    <button className="btn-position">Get Position</button>
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
