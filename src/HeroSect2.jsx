import './assets/style.css'
import food2 from './assets/food2.png'
import arrow from './assets/arrow.png'
let HeroSect2 = () => {
    return (
        <>
            <div className="heroSection">
                <div className="imageArea">
                    <img src={ food2 } alt="" />
                </div>
                <div className="txtArea">
                    <p className="yellow">About</p>
                    <h1>Food Is An Important<br />
                        Part Of A Balanced <br />
                        Diet</h1>
                    <p>Healthy switcher chefs do all the prep work, like<br />
                        peeding, chopping & marinating, so you can cook<br />
                        a fresh food.</p>
                    <div className="orderBtn">
                        <a href="#">Learn More<img src={arrow} className='imgArrow' /></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSect2;