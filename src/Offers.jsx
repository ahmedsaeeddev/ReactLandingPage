import './assets/style.css'
import knife1 from './assets/knife1.png';
import delivery from './assets/delivery.png';

let Offers = () => {
    return (
        <>
            <div className="main">
                <p>Work</p>
                <h1>How It Works</h1>
                <div>Healthy switcher chefs do all the prep work, like
                    peeding, chopping & marinating, so you can cook
                    a fresh food.
                    Healthy switcher chefs do all the prep work, like
                    peeding, chopping & marinating, so you can cook
                    a fresh food.</div>
                <div className="cards">
                    <div className="card">
                        <img src={knife1} alt="" />
                        <h3>
                            Lorem ipsum dolor sit
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et incidunt sint atque, sunt necessitatibus qui reiciendis nostrum repellendus, eveniet porro quod modi nisi cumque corporis consectetur .</p>
                    </div>
                    <div className="card">
                        <img src={knife1} alt="" />
                        <h3>
                            Lorem ipsum dolor sit
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et incidunt sint atque, sunt necessitatibus qui reiciendis nostrum repellendus, eveniet porro quod modi nisi cumque corporis consectetur .</p>
                    </div>
                    <div className="card">
                        <img src={knife1} alt="" />
                        <h3>
                            Lorem ipsum dolor sit
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et incidunt sint atque, sunt necessitatibus qui reiciendis nostrum repellendus, eveniet porro quod modi nisi cumque corporis consectetur .</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Offers;