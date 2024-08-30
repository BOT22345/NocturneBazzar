import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="DescriptionBox">
      <div className="DescriptionBoxNavigator">
        <div className="DescriptionBoxNavBox">Description</div>
        <div className="DescriptionBoxNavBox Fade">Reviews (122)</div>
      </div>
      <div className="DescriptionBoxDescription">
        <p>
          An e-commerce website is a digital platform designed to facilitate the
          buying and selling of goods and services over the internet. It serves
          as an online storefront where businesses can present their products to
          a global audience, allowing consumers to browse, select, and purchase
          items from the comfort of their own homes.
        </p>
        <p>
          The journey begins on the homepage, which acts as the main entry point
          and sets the tone for the entire shopping experience. Here, visitors
          are greeted with a visually appealing layout that highlights featured
          products, special promotions, and various categories.
        </p>
      </div>
    </div>
  );
}
export default DescriptionBox;
