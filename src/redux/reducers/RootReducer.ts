import { combineReducers } from "redux";
import productReducer from "./productReducer";

const RootReducer = combineReducers({
  products: productReducer,
});

export default RootReducer;
