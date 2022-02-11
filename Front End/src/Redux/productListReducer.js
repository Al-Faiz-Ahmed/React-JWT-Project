import {
  PRODUCT_LIST_ERROR,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_ERROR,
} from "./products-constants";

let productList = {
  productsData: [],
  loading: false,
  error: "",
};
let productData = {
  productData: {},
  loading: false,
  error: "",
};

export default function ProductListReducer(state = productList, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: false,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: true,
        productsData: action.payload,
      };
    case PRODUCT_LIST_ERROR:
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
export function ProductReducer(state = productData, action) {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        loading: false,
      };
    case PRODUCT_SUCCESS:
      return {
        loading: true,
        productData: action.payload,
      };
    case PRODUCT_ERROR:
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
