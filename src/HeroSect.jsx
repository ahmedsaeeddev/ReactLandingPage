import './assets/style.css'
import food1 from './assets/food.png'
import arrow from './assets/arrow.png'
let HeroSect = () => {
    return (
        <>
            <div className="heroSection">
                <div className="txtArea">
                    <h1>Your Favourite Food<br />
                        Delivered Hot &<br />
                        Fresh</h1>
                    <p>Healthy switcher chefs do all the prep work, like<br />
                        peeding, chopping & marinating, so you can cook<br />
                        a fresh food.</p>
                        <div className="orderBtn">
                    <a href="#">Order Now<img src={arrow} className='imgArrow' /></a>
                        </div>
                </div>
                <div className="imageArea">
                    <img src={food1} alt="" />
                </div>
            </div>
        </>
    )
}
export default HeroSect;