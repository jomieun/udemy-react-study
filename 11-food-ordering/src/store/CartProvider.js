import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHAndler = (id) => {};

  const CartContextItem = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHAndler,
  };

  return (
    <CartContext.Provider value={CartContextItem}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
