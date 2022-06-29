import { userConstants } from "./constants";
import axiosInstance from "../helper/axios";

export const signup = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({
      type: userConstants.SIGNUP_REQUEST,
    });

    const res = await axiosInstance.post(`/signup`, {
      ...user,
    });
    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: userConstants.SIGNUP_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: userConstants.SIGNUP_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const getAddress = () => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post("/user/getaddress");
      dispatch({ type: userConstants.GET_USER_ADDRESS_REQUEST });
      if (res.status === 200) {
        const {
          userAddress: { address },
        } = res.data;
        dispatch({
          type: userConstants.GET_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addAddress = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post("/user/address/create", { payload });
      dispatch({
        type: userConstants.ADD_USER_ADDRESS_REQUEST,
      });
      if (res.status === 201) {
        console.log(res);
      }else{
          const { error } = res.data;
          dispatch({
              type: userConstants.ADD_USER_ADDRESS_FAILURE,
              payload: error
          });

      }
    } catch (error) {
        console.log(error);
    }
  };
};
