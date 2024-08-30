import { Link } from 'react-router-dom';
import './Item.css';
function Item(props){
    return <>
    <div className="item" >
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""></img></Link>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                Rs.{props.new_price}
            </div>
            <div className='item-price-old'>
                Rs.{props.old_price}
            </div>
        </div>
    </div>
    </>
}

export default Item;