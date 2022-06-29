import React, { useState } from "react";
import "./style.css";

/**
 * @author
 * @function CartItem
 **/

const CartItem = (props) => {
  const [qty, setQty] = useState(props.cartItem.qty);

  const { _id, name, price, img } = props.cartItem;

  const inQuantityIncrement = () => {
    setQty(qty + 1);
    props.inQuantityInc(_id, qty + 1);
  };

  const inQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    props.inQuantityDec(_id, qty - 1);
  };

  return (
    <div className="cartItemContainer">
      <div className="flexRow">
        <div className="cartProImgContainer">
          <img src={img} alt={""} />
        </div>
        <div className="cartItemDetails">
          <div>
            <p>{name}</p>
            <p>Prix. {price}DT</p>
          </div>
          <div>Deliveré on 3 - 5 jours</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "5px 0",
        }}
      >
        {/* quantity control */}
        <div className="quantityControl">
          <button onClick={inQuantityDecrement}>-</button>
          <input value={qty} readOnly />
          <button onClick={inQuantityIncrement}>+</button>
        </div>
        <button
          className="cartActionBtn"
          onClick={() => props.onRemoveCartItem(_id)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default CartItem;
