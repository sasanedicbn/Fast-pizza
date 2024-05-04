
const MainComponent = () => {
    return (
        <div className="main-container">
            <p className="pizza-text">The best pizza.</p>
            <p className="welcome-text">Straight out of the oven, straight to you. 👋 Welcome!</p>
            <p className="welcome-instruction">Welcome! Please start by telling us your name:</p>
            <input
                type="text"
                className="input-field"
                placeholder="Your full name"
            />
        </div>
    );
}

export default MainComponent;
