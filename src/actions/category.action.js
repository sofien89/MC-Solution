import axiosInstance from "../helper/axios";
import { categoryConstansts } from "./constants";

const getAllCategory = () => {
    return async dispatch => {

        dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST });
        const res = await axiosInstance.get(`category/getcategory`);
        console.log(res);
        if (res.status === 200) {

            const { categoryList } = res.data;

            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categoryList }
            });
        } else {
            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            });
        }


    }
}

export {
    getAllCategory
}