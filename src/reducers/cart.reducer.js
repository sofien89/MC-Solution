import { cartConstants } from "../actions/constants";

const initState = {
    cartItems: {},
    updatingCart: false,
    // error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case cartConstants.ADD_TO_CART_REQUEST:
            state = {
                ...state,
                updatingCart: true
            }
            break;
        case cartConstants.ADD_TO_CART_SUCCESS:
            state = {
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: false
            }
            break;
        case cartConstants.ADD_TO_CART_FAILURE:
            state = {
                ...state,
                updatingCart: false,
                error: action.payload.error
            }
            break;
        case cartConstants.RESET_CART:
            state = {
                ...initState
            }
    }
    return state;
}



// const CART_INITIAL_STATE = {
//   cartItems: [],
// };

// export const cartReducer = (state = CART_INITIAL_STATE, action) => {
//   switch (action.type) {
//     case cartConstants.ADD_TO_CART_REQUEST:
//       const item = action.payload;

//       const existItem = state.cartItems.find((x) => x.product === item.product);

//       if (existItem) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((x) =>
//             x.product === existItem.product ? item : x
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item],
//         };
//       }
//     case cartConstants.REMOVE_CART_ITEM_SUCCESS:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((x) => x.product !== action.payload),
//       };
//     default:
//       return state;
//   }
// };