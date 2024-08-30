import { useEffect, useState } from 'react';
import './ListProduct.css';
import crossIcon from '../../assets/cart_cross_icon.png';


function ListProduct(){
    const [products,setAllProducts]=useState([]);

    const fetchInfo=async()=>{
        await fetch('http://localhost:4000/allproduct')
        .then((res)=>res.json())
        .then((data)=>{setAllProducts(data)});
    }

    useEffect(()=>{
        fetchInfo();
    },[])
    const remove_product =async (id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }
    return <>
    <div className="listproduct">
     <h1>All Product List</h1>
     <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old_Price</p>
        <p>New_Price</p>
        <p>Category</p>
        <p>Remove</p>
     </div>
     <div className='listproduct-allproduct'>
        <hr></hr>
        {products.map((product,index)=>{
            return <>
            <div key={index} className='listproduct-format-main listproduct-format'>
                <img src={product.image} className='listproduct-product-icon'></img>
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img src={crossIcon} onClick={()=>{remove_product(product.id)}}className="listproduct-remove-icon"></img>
                <p>${console.log("it is not rendering successfully")}</p>
            </div>
            <hr></hr>
            </>

        })}
     </div>
    </div>
    </>
}

export default ListProduct;