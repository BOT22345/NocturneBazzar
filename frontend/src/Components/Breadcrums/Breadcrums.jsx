import './Breadcrums.css';
import arrow_icon from "../Assets/breadcrum_arrow.png";
function Breadcrums (props){
    const {product}=props;
    return <div className="Breadcrums">
        HOME <img src={arrow_icon} alt=""></img> SHOP <img src={arrow_icon} alt=""></img> {product.category} <img src={arrow_icon} alt=""></img> {product.name}
    </div>
}
export default Breadcrums