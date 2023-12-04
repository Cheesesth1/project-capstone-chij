export const Product = {
  productName: "Backpack",
  price: 49.99,
  productImage: "example.jpg",
};
const { productName, price, productImage } = Product;

<div className="product">
  <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5FPkhKey_2FhBMGlQKT68fsNdkgd6kVGBWUtl8AjcPMK4g8iW2oC4undBKioN1SleBuUI1K7JK4AK14mylwury3nNDoAn-zlhYgv2W_m26aGlTh1iIZsHZV4DcyVGDU3V78cmsLY&usqp=CAc"></img>
  <div className="decription">
    <p>{productName}</p>
    <p>$ {price}</p>
    <p>{productImage}</p>
  </div>
</div>;
