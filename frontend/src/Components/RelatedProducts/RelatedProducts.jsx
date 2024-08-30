import "./RelatedProducts.css";
import Item from "../Item/Item.jsx";
import Product_data from "../Assets/data.js";
function RelatedProducts() {
  return (
    <div className="RelatedProducts">
      <h1>Related Products</h1>
      <hr></hr>
      <div className="RelatedProductsItem">
        {Product_data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            ></Item>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;
