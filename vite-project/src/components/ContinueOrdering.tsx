import { useSelector } from "react-redux"

const ContinueOrdering = () => {
    const name = useSelector(state => state.customer.customerName)

    return(
        <button type='submit' className='custom-button' >CONTINUE ORDER, {name} </button>
    )
}
export default ContinueOrdering