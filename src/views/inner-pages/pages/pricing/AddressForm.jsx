import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, getCartItems } from "../../../../actions";
import Input from "../../../../components/Input";
import { MaterialButton } from "../../../../components/MaterialUI";
import Carda from "../../../../components/UI/Card";
import CartItem from "../Cart/CartItem";

const AddressForm = (props) => {
  const { initialData } = props;
  const [name, setName] = useState(initialData ? initialData.name : "");
  const [mobileNumber, setMobileNumber] = useState(
    initialData ? initialData.mobileNumber : ""
  );

  const [address, setAddress] = useState(
    initialData ? initialData.address : ""
  );
  const [alternatePhone, setAlternatePhone] = useState(
    initialData ? initialData.alternatePhone : ""
  );
  const [companyName, setCompanyName] = useState(
    initialData ? initialData.companyName : ""
  );
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [id, setId] = useState(initialData ? initialData._id : "");
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

  const inputContainer = {
    width: "100%",
    marginRight: 10,
  };

  const onAddressSubmit = (e) => {
    const payload = {
      address: {
        name,
        mobileNumber,
        address,
        alternatePhone,
        companyName,
      },
    };
    console.log(payload);
    if (id) {
      payload.address._id = id;
    }
    dispatch(addAddress(payload));
    setSubmitFlag(true);
  };

  useEffect(() => {
    console.log("addressCount", user.address);
    if (submitFlag) {
      console.log("where are we", user);
      let _address = {};
      if (id) {
        _address = {
          _id: id,
          name,
          mobileNumber,
          address,
          alternatePhone,
          companyName,
        };
      } else {
        _address = user.address.slice(user.address.length - 1)[0];
      }

      props.onSubmitForm(_address);
    }
  }, [user.address]);

  const renderAddressForm = () => {
    return (
      <div className="container">
        <div className="flexRow">
          <div style={inputContainer}>
            <Input
              label="Nom compléte"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={inputContainer}>
            <Input
              label="Téléphone"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="flexRow"></div>
        <div className="flexRow">
          <div style={inputContainer}>
            <Input
              label="Adresse"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="flexRow"></div>
        <div className="flexRow">
          <div style={inputContainer}>
            <Input
              label="Nom de l’entreprise(facultatif)"
              value={alternatePhone}
              onChange={(e) => setAlternatePhone(e.target.value)}
            />
          </div>
          <div style={inputContainer}>
            <Input
              label="Autre téléphone(Optional)"
              value={alternatePhone}
              onChange={(e) => setAlternatePhone(e.target.value)}
            />
          </div>
        </div>
        <div className="flexRow">
          <MaterialButton
            title="SAVE AND DELIVER HERE"
            onClick={onAddressSubmit}
            style={{
              width: "250px",
              margin: "20px 0",
            }}
          />
        </div>
      </div>
    );
  };

  if (props.withoutLayout) {
    return <div>{renderAddressForm()}</div>;
  }

  return (
    <div className="checkoutStep" style={{ background: "#D6C4EA" }}>
      <div className={`checkoutHeader`}>
        <div>
          <h3 className="stepTitle">{"AJOUTER ADRESSE"}</h3><br></br>
        </div>
      </div>
      <div
        style={{
          padding: "0 60px",
          paddingBottom: "20px",
          boxSizing: "border-box",
        }}
      >
        {renderAddressForm()}
        <div className="cartContainer" style={{ alignItems: "flex-start" }}>
          <div className="container">
            <Carda
              headerLeft={"Panier"}
              style={{ width: "calc(100% - 400px)", overflow: "hidden" }}
            >
              {Object.keys(cartItems).map((key, index) => {
                return <CartItem key={index} cartItem={cartItems[key]} />;
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
            </Carda>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
