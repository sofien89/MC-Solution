import React, { useEffect } from "react";
import Layout from "../../../../components/Layout";
import ProductStore from "./ProductStore";

/**
 *
 * @author
 * @function ProductListPage
 */

const ProductListPage = (props) => {
  const renderProduct = () => {
    console.log(props);
  };

  return (
    <Layout>
      <ProductStore {...props} />
      {renderProduct()}
    </Layout>
  );
};

export default ProductListPage;
