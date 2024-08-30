import './Hero.css';
import HandIcon from '../Assets/handIcon.png';
import arrowImg from '../Assets/arrow.png';
import girlShopImg from '../Assets/girlShopImg.png';
function Hero(){

    return<>
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-icon">
                    <p>new</p>
                    <img src={HandIcon} alt="Hand Icon  is img not able to render"></img>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrowImg} alt=""></img>
        </div>
        </div>
        <div className="hero-right"></div>
        <img className="girlShopImg" src={girlShopImg} alt=""></img>
    </div>
    </>

}

export default Hero;