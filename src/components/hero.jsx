

const HeroSection = () => {
    return(
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        
            <div className = "hero-button1">
                <button>Shop Now</button>
                <button className="hero-button2">Category</button>
            </div>
            <div className = 'available'><p>Also Available on</p></div>
            <div className="brand">
                <img src="/images/amazon.png" alt="amazon" />
                <img src="/images/flipkart.png" alt="flipkart" />
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/shoe_image.png" alt="shoe" />
        </div>
    </main>
);
}

export default HeroSection;