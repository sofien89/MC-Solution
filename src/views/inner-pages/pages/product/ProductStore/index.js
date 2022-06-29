import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsBySlug } from "../../../../../actions";
import CopyRight from "../../../../../components/footer/CopyRight";
import FooterTwo from "../../../../../components/footer/FooterTwo";

const ProductStore = (props) => {
  const product = useSelector((state) => {
    console.log(state.product);
    return state.product.products;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);
  return (
    <div className="main-page-wrapper p0">
      <div className="fancy-hero-two">
        <div className="bg-wrapper">
          <div className="text-center row">
            <div className="col-xl-9 m-auto">
              <h1 className="heading">Réseaux & VoIP</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="productContainer">
        {Object.keys(product).map((option, index) => {
          return (
            <div
            className="container"
              style={{ display: "wrap", width: 700, padding: 30 }}
              key={index}
            >
              
              <Link
                to={`/${product[option].slug}/${product[option]._id}/page`}
                style={{
                  display: "flex-wrap",
                  textDecoration: "none",
                  color: "#6f7681",
                }}
                className="productContainer"
              >
                {/* <h3 className="title-list"></h3>
                    <span className="price-list">{product[option].price}</span>
                    <br></br>
                    <span className="desc-list">
                      {product[option].description}.
                    </span> */}
                <div className="productContainer"
                style={{
                  flex: "wrap-reverse"
                }}
                >
                  <Card
                    style={{
                      width: "18rem",
                      flex: "wrap",
                      flex: "wrap-reverse",
                    }}
                  >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>{product[option].name}</Card.Title>
                      <Card.Text>{product[option].description}</Card.Text>
                      <Button variant="primary">Voir détail</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Link>
            </div>
          );
        })}
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
    </div>
  );
};

export default ProductStore;
