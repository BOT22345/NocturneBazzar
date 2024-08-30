import './Sidebar.css';
import {Link} from 'react-router-dom';
import cartIcon from '../../assets/cartIcon.jpg';
import listProduct from '../../assets/listIcon.jpg';
function Sidebar(){
    return <>
    <div className="sidebar">
    <Link to={'/addproduct'} style={{textDecoration:"none"}}>
    <div className='sidebar-item'>
        <img className="sideBarImage" src={cartIcon}></img>
        <p>Add Product</p>
    </div>
    </Link>
    <Link to={'/listproduct'} style={{textDecoration:"none"}}>
    <div className='sidebar-item'>
        <img className="sideBarImage" src={listProduct}></img>
        <p>Product List</p>
    </div>
    </Link>
    </div>
    </>
}
export default Sidebar;