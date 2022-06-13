import { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCxt = useContext(CartContext);

  /* const numberOfCartItems = cartCxt.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0); */

  const btnClases = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;
  const { items } = cartCxt;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClases} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCxt.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
