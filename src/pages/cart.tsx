const Cart = () => {
  return (
    <div>
      <header>
        <div className="cart_icon">🛒</div>
        <div className="wishlist_icon"></div>
      </header>

      <button onClick={() => "addToCart(1)"}>Cart</button>
      <button onClick={() => "addToWishlist(1)"}>Wish</button>
      <div className="product">
        <h2>Mountain Backpack</h2>
      </div>
    </div>
  );
};

export default Cart;
