const Order = () => {
    return(
        <div className="order-container">
            <h2>Ready to order? Let's go!</h2>
            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="text" id="phoneNumber" />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" />
                    <button>Get Position</button>
                </div>
                <div>
                    <input type="checkbox" id="priorityOrder" />
                    <label htmlFor="priorityOrder">Want to give your order priority?</label>
                </div>
                <button>ORDER NOW FOR PRICE</button>
            </form>
        </div>
    )
}

export default Order;
