import './assets/style.css'
let Nav = () => {
    return (
        <>
            <div className="NavBar">
                <div className="logo">
                    <h1><a href="#">FOODIE</a></h1>
                </div>
                <div className="links">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Testimonials</a>
                    <a href="">Contact</a>
                    <a href="" className="booking">Booking Now</a>
                </div>
            </div>
        </>
    )
}

export default Nav;