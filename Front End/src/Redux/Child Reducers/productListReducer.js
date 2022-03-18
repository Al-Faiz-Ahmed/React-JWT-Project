import {
  PRODUCT_LIST_ERROR,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_REVIEW_ERROR,
  PRODUCT_REVIEW_REQUEST,
  PRODUCT_REVIEW_SUCCESS,
} from "../Constants/products-constants";

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

export function productListReducer(state = productList, action) {
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

export function productReviewReducer(state = {}, action) {
  switch (action.type) {
    case PRODUCT_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_REVIEW_SUCCESS:
      
      return { loading: false,success:true };
    case PRODUCT_REVIEW_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
