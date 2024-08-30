import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import {useContext} from 'react';

function ProductDisplay(props){
    const {product}=props;
    const {addToCart}=useContext(ShopContext)
    return <div className='ProductDisplay'>
        <div className='ProductDisplayLeft'>
            <div className='ProductDisplayImageList'>
                <img src={product.image} alt=""></img>
                <img src={product.image} alt=""></img>
                <img src={product.image} alt=""></img>
                <img src={product.image} alt=""></img>
            </div>
            <div className='ProductDisplayImage'>
                <img className="ProductDisplayMainImage" src={product.image} alt=""></img>
            </div>
        </div>
        <div className='ProductDisplayRight'>
            <h1>{product.name}</h1>
            <div className='ProductDisplayRightStar'>
                <img src={star_icon} alt=""></img>
                <img src={star_icon} alt=""></img>
                <img src={star_icon} alt=""></img>
                <img src={star_icon} alt=""></img>
                <img src={star_dull_icon} alt=""></img>
                <p>(122)</p>
            </div>
            <div className="ProductDisplayRightPrices">
                <div className='ProductDisplayRightPriceOld'>
                    ${product.old_price}
                </div>
                <div className="ProductDisplayRightPriceNew">${product.new_price}</div>
            </div>
            <div className='ProductDisplayRightDescription'>
                A lightweight, usually knitte, pullover shirt, close-fitting and a round neckline and short sleeves, worn as an undershirt or outer garment
            </div>
            <div className='ProductDisplayRightSize'>
                <h1>Select Size</h1>
                <div className='ProductDisplayRightSizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="ProductDisplayRightCategory"><span>Category : </span>Women, T-shirt, Crop Top</p>
            <p className="ProductDisplayRightCategory"><span>Tags : </span>Modern, Latest</p>
        </div>
    </div>
}

export default ProductDisplay