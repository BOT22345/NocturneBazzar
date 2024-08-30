import {useContext} from 'react';
import { ShopContext } from "../Context/ShopContext";
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import './CSS/Product.css'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

function Product(){
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===+productId);
    return <div className='ProductMainContainer'>
        <Breadcrums product={product}></Breadcrums>
        <ProductDisplay product={product}></ProductDisplay>
        <DescriptionBox></DescriptionBox>
        <RelatedProducts></RelatedProducts>
    </div>
}
export default Product;