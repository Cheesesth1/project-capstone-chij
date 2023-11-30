const Cart = () => {
  return (
    <div>
      <header>
        <div className="cart_icon">🛒</div>
      </header>

      <div className="product">
        <h2>Mountain Backpack</h2>
        <button onClick={() => "addToCart(1)"}>Cart</button>
        <button onClick={() => "addToWishlist(1)"}>Wish</button>
      </div>
    </div>
  );
};

export default Cart;
