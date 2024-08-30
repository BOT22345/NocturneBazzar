import { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import myProduct from '../Assets/all_product'
import CrossIcon from '../Assets/cross_icon.jpg'

function CartItem(){
    const all_product=myProduct;
    const cartItems=myProduct;
    const {removeFromCart,getTotalCartAmount}=useContext(ShopContext)

    return <div className="CartItems">
        <div className="CartItemsFormat">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        <hr></hr>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                            <div className='CartItemsFormat CartItemsFormatMain'>
                                <img src={e.image} alt="" className="CartItemProductIcon"></img>
                                <p>Rs.{e.name}</p>
                                <p>Rs.{e.new_price}</p>
                                <button className="CartItemQuantity">{cartItems[e.id]}</button>
                                {/* <p>Rs.{e.new_price*cartItems[e.id]}</p> */}
                                {/* <img className='CartItemRemoveIcon' src={CrossIcon} onClick={()=>{removeFromCart(e.id)}} alt=""></img> */}
                            </div>
                        <hr></hr>
                        </div>
            }
            return null;
        })}
        <div className='CartItemsDown'>
            <div className='CartItemsTotal'>
                <h1>Cart Totals</h1>
                <div>
                    <div className='CartItemsTotalItem'>
                        <p>Subtotal</p>
                        <p>Rs. {getTotalCartAmount()}</p>
                    </div>
                    <hr></hr>
                    <div className='CartItemsTotalItem'>
                        <p>Shipping Fee</p>
                        <p>Free</p> 
                    </div>
                    <hr></hr>
                    <div className='CartItemsTotalItem'>
                        <h3>Total</h3>
                        <h3>Rs. {getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className='CartItemsPromoCode'>
                <p>If you have a promo code, Enter it here</p>
                <div className='CartItemsPromoBox'>
                    <input type="text" placeholder='promo code here'></input>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
}

export default CartItem;