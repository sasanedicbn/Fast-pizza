import { RootState } from "../store/store"
import { useSelector } from "react-redux"

const ContinueOrdering = () => {
    const name = useSelector((state:RootState) => state.customer.customerName)

    return(
        <button type='submit' className='custom-button' >CONTINUE ORDER, {name} </button>
    )
}
export default ContinueOrdering