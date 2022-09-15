import axios from "axios";
import { Dispatch } from "redux";
import {
  ADD_CARD,
  DELETE_CARD,
  LOADING_DATA,
  ProductDispatchTypes,
  ProductType,
  SET_CART,
  SET_ERROR,
  SET_PRODUCTS,
  SET_WISHLIST,
} from "../types";

//for get products
export const getProducts =
  () => async (dispatch: Dispatch<ProductDispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      dispatch({ type: SET_PRODUCTS, payload: res.data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: (error as Error).message });
    }
  };

//for set product to cart
export const setProductCart =
  (product: ProductType) => (dispatch: Dispatch<ProductDispatchTypes>) => {
    dispatch({ type: SET_CART, payload: product });
  };

//for set product to wishlist
export const setProductWishlist =
  (product: ProductType) => (dispatch: Dispatch<ProductDispatchTypes>) => {
    dispatch({ type: SET_WISHLIST, payload: product });
  };

//to add a new product
export const addCard =
  (product: ProductType) => (dispatch: Dispatch<ProductDispatchTypes>) => {
    dispatch({ type: ADD_CARD, payload: product });
  };

//to delete a card
export const deleteCard =
  (id: number) => (dispatch: Dispatch<ProductDispatchTypes>) => {
    dispatch({ type: DELETE_CARD, payload: id });
  };
