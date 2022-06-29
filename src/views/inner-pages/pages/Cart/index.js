import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carda from "../../../../components/UI/Card";
import Layout from "../../../../components/Layout";
import CartItem from "./CartItem";
import { addToCart, getCartItems, removeCartItem } from "../../../../actions";
import CopyRight from "../../../../components/footer/CopyRight";
import FooterTwo from "../../../../components/footer/FooterTwo";
import { MaterialButton } from "../../../../components/MaterialUI";
import PriceDetails from "../../../../components/PriceDetails";
const Cart = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    console.log(state.cart);
    return state.cart;
  });
  const auth = useSelector((state) => state.auth);

  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);
  // console.log({cartItems});

  const inQuantityIncrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
    // console.log(_id, qty);
  };
  const inQuantityDecrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };
  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };

  return (
    <Layout>
      <div className="main-page-wrapper p0">
        <div className="fancy-hero-three">
          <div className="bg-wrapper">
            <div className="text-center row">
              <div className="col-xl-9 m-auto">
                <h1 className="heading">Mon Panier</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
      </div>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <div className="container">
          <Carda
            headerLeft={"Panier"}
            style={{ width: "calc(100% - 400px)", overflow: "hidden" }}
          >
            {Object.keys(cartItems).map((key, index) => {
              return (
                <CartItem
                  key={index}
                  cartItem={cartItems[key]}
                  inQuantityInc={inQuantityIncrement}
                  inQuantityDec={inQuantityDecrement}
                  onRemoveCartItem={onRemoveCartItem}
                />
              );
            })}
            <div
              style={{
                width: "100%",
                display: "flex",
                background: "#ffffff",
                justifyContent: "flex-end",
                boxShadow: "0 0 10px 10px #eee",
                padding: "10px 0",
                boxSizing: "border-box",
              }}
            ></div>
            <div style={{ width: "250px" }}>
              <MaterialButton
                title="PLACER ORDER"
                onClick={() => props.history.push(`/checkout`)}
              />
              <PriceDetails
                totalItem={Object.keys(cart.cartItems).reduce(function (
                  qty,
                  key
                ) {
                  return parseInt(qty + cart.cartItems[key].qty);
                },
                0)}
                totalPrice={Object.keys(cart.cartItems).reduce(
                  (totalPrice, key) => {
                    const { price, qty } = cart.cartItems[key];
                    return totalPrice + price * qty;
                  },
                  0
                )}
              />
            </div>
          </Carda>
          <Carda
            {...props}
            headerLeft="Sous-total"
            style={{
              width: "770px",
            }}
          ></Carda>
        </div>
      </div>
      <footer className="theme-footer-one pt-130 md-pt-70">
        <div className="top-footer">
          <div className="container">
            <FooterTwo />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRight />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
    </Layout>
  );
};

export default Cart;
