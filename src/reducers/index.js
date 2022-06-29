import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import cartReducer from './cart.reducer'
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer
})
export default rootReducer;