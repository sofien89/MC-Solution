import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../../../../actions";
import HeaderLandingAppointment from "../../../../../components/header/landing/HeaderLandingAppointment";
import { addToCart } from "../../../../../actions";
import { IoIosAdd, IoMdAdd, IoMdCart } from "react-icons/io";
import { MaterialButton } from "../../../../../components/MaterialUI";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    const { productId } = props.match.params;
    console.log(props);
    const payload = {
      params: {
        productId,
      },
    };
    console.log(product.productDetails);
    dispatch(getProductDetailsById(payload));
  }, []);
  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }

  return (
    <div>
      {/* End Page SEO Content */}
      <HeaderLandingAppointment {...props} />
      <div className="fancy-hero-five">
        <div className="bg-wrapper">
          <div className="container">
            {/* <div className="fancy-hero-six">
        <div className="container-page">
          <h2>{product.productDetails.name}</h2>
          <span className="price-page">{product.productDetails.price}</span>
          <p className="desc-page">{product.productDetails.description}</p>
        </div>
      </div> */}
            <div className="container-a">
              <div className="left-a">
                <div className="imgContainer-a">
                  <img
                    // src={product.productPictures.img}

                    alt="shap"
                  />
                </div>
              </div>
              <div className="right-a">
                <h2 className="title-a">{product.productDetails.name}</h2>
                <span className="price-a">
                  {product.productDetails.price ? product.productDetails.price  : null}
                  DT
                  
                </span>
                <br></br>
                <p className="desc-a">{product.productDetails.description}</p>
                <br></br>

                <h3 className="choose-a">Choisissez une offre supplémentaire</h3>
                <div className="ingredients-a">
                  <div className="option-a">
                    <input
                      type="checkbox"
                      id="double"
                      name="double"
                      className="checkbox"
                    />
                    <label htmlFor="double">Trimestriel</label>
                  </div>
                  <div className="option-a">
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="cheese"
                      name="cheese"
                    />
                    <label htmlFor="cheese">Semestriel</label>
                  </div>
                  <div className="option-a">
                    <input
                      className="checkbox"
                      type="checkbox"
                      id="spicy"
                      name="spicy"
                    />
                    <label htmlFor="spicy">Annuel</label>
                  </div>
                </div>
                <div className="add-a">

                  <MaterialButton
                    title="Ajouter au panier"
                    bgColor="#572ff6"
                    textColor="#ffffff"
                    style={{ marginRight: "5px" }}
                    icon={<IoMdCart />}
                    onClick={() => {
                      const { _id, name, price } = product.productDetails;
                      // const img = product.productDetails.productPictures[0].img;
                      dispatch(addToCart({ _id, name, price /*img*/ }));
                      props.history.push(`/cart`);
                    }}
                  ></MaterialButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
