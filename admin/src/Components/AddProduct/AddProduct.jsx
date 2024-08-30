import './AddProduct.css';
import uploadImage from '../../assets/uploadImage.jpg';
import { useState } from 'react';

function AddProduct() {
    const [image, setImage] = useState(null); // Initialize as null
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
    });

    const imageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        if (image) {
            formData.append('product', image);

            // Upload image first
            await fetch('https://nocturnebazzar-backend.onrender.com/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            }).then((resp) => resp.json()).then((data) => {
                responseData = data;
            });

            if (responseData.success) {
                product.image = responseData.image_url;
                console.log(product);

                // Add product details with image URL
                await fetch('https://nocturnebazzar-backend.onrender.com/addproduct', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                }).then((resp) => resp.json()).then((data) => {
                    data.success ? alert("Product Added") : alert("Failed");
                });
            }
        } else {
            alert("Please upload an image");
        }
    };

    return (
        <div className='add-product'>
            <div className='addproduct-itemfield'>
                <p>Product title</p>
                <input
                    value={productDetails.name}
                    onChange={changeHandler}
                    type="text"
                    name="name"
                    placeholder='Type Here'
                />
            </div>
            <div className='addproduct-price'>
                <div className='addproduct-itemfield'>
                    <p>Price</p>
                    <input
                        value={productDetails.old_price}
                        onChange={changeHandler}
                        type="text"
                        name="old_price"
                        placeholder='Type Here'
                    />
                </div>
                <div className='addproduct-itemfield'>
                    <p>Offer Price</p>
                    <input
                        value={productDetails.new_price}
                        onChange={changeHandler}
                        type="text"
                        name="new_price"
                        placeholder='Type Here'
                    />
                </div>
            </div>
            <div className='addproduct-itemfield'>
                <p>Product Category</p>
                <select
                    value={productDetails.category}
                    onChange={changeHandler}
                    name="category"
                    className='add-product-selector'
                >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kids</option>
                </select>
            </div>
            <div className='addproduct-itemfield'>
                <label htmlFor="file-input">
                    <img
                        src={image ? URL.createObjectURL(image) : uploadImage}
                        className='add-product-thumbnail-image'
                        alt="Product Thumbnail"
                    />
                </label>
                <input
                    onChange={imageHandler}
                    type="file"
                    name="image"
                    id="file-input"
                    hidden
                />
            </div>
            <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
        </div>
    );
}

export default AddProduct;
