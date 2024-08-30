import {useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';
import dropDown from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import myProduct from '../Components/Assets/all_product';
function ShopCategory(props){
    // const {all_product}=useContext(ShopContext);
    const all_product=myProduct;
    return <div className="ShopCategoryMainContainer">

    <div className="shopCategory">
            <img src={props.banner} alt="" className='Banner'></img>
            <div className="shopCategoryIndexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopCategory-sort">
                    Sort by <img src={dropDown} alt=""></img>
                </div>
            </div>
            <div className="shopCategory-products">
            {all_product.map((item,i)=>{
                if(props.category===item.category){
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                }
                else{
                    return null;
                }
            })}
            </div>
        <div className="ShopCategoryLoadMore">
            Explore More
        </div>
        </div>
    </div> 
}

export default ShopCategory;