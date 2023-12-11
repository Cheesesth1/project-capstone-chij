const Cart = () => {
  return (
    <div>
      <header>
        <div className="cart_icon">🛒</div>
        <div className="wishlist_icon"></div>
      </header>

      <button onClick={() => "addToCart(1)"}>Cart</button>
      <button onClick={() => "addToWishlist(1)"}>Wish</button>
    </div>
  );
};

export default Cart;
