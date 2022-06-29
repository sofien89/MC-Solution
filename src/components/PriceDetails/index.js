import React from "react";
import Carda from "../UI/Card";

const PriceDetails = (props) => {
  return (
    <Carda headerLeft={"Prix"} style={{ maxWidth: "380px" }}>
      <div
        style={{
          padding: "20px",
          boxSizing: "border-box",
          position: "relative",
          display : "list-item"
        }}
      >
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Prix ({props.totalItem} items)</div>
          <div>{props.totalPrice}DT</div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Total Amount</div>
          <div>{props.totalPrice}DT</div>
        </div>
      </div>
    </Carda>
  );
};

export default PriceDetails;
