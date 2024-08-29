import './assets/style.css'
import pfp from './assets/pfp.png';

let Testimonials = () => {
    return (
        <>
            <div className='testimonials'>
                <p className='Test'>Testimonial</p>
                <h1>What They Are Saying</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam.</p>
                <div className="cardsDiv">
                    <div className="cardDiv">
                        <img src={pfp} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et incidunt sint atque, sunt necessitatibus qui reiciendis nostrum repellendus, eveniet porro quod modi nisi cumque corporis consectetur .</p>
                    <h3>John Doe</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;