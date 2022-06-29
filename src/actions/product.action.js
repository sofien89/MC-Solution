import axiosInstance from "../helper/axios";
import { productConstants } from "./constants";

export const getProductsBySlug = (slug) => {
  return async (dispatch) => {
    const res = await axiosInstance.get(`/products/${slug}`);
    console.log(res); /*** */
    if (res.status === 200) {
      dispatch({
        type: productConstants.GET_PRODUCTS_BY_SLUG,
        payload: res.data,
      });
    } else {
    }
  };
};
export const getAllProducts = (payload) => {
  return async (dispatch) => {

    const { cid } = payload.params;
    const res = await axiosInstance.get(`/page/${cid}`);
    console.log(res);
    if (res.status === 200) {

    }
    else {

    }
  };
};


export const getProductDetailsById = (payload) => {
  return async dispatch => {
      dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
      let res;
      try {
          const { productId } = payload.params;
          res = await axiosInstance.get(`/product/${productId}`);
          console.log(res);
          dispatch({
              type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
              payload: { productDetails: res.data.product }
          });

      } catch(error) {
          console.log(error);
          dispatch({
              type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
              payload: { error: res.data.error }
          });
      }

  }
}

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstants.GET_PRODUCTS });
      const res = axiosInstance.post(`/allProducts`);
      if (res.status === 200) {
        const { products } = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products },
        });
      } else {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};