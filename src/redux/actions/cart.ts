import { DTCart } from "../../assets/DataTypes/DTCart";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_CANT_CART = "SET_CANT_CART";
export const UPDATE_CART = "UPDATE_CART";
export const CLEAN_CART = "CLEAN_CART";
export interface addToCartAction {
  type: typeof ADD_TO_CART;
  payload: DTCart;
}

export function addToCart(cart: DTCart): addToCartAction {
  return {
    type: ADD_TO_CART,
    payload: cart,
  }
};

export interface removeFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: DTCart;
}

export interface setCantCartAction {
  type: typeof SET_CANT_CART;
  payload: { _id: string, cant: number };
}

export function setCantCart(cart: { _id: string, cant: number }): setCantCartAction {
  return {
    type: SET_CANT_CART,
    payload: cart,
  }
}

export interface updateCartAction {
  type: typeof UPDATE_CART;
  payload: { index: number, data: DTCart };
}

export function updateCart(cart: { index: number, data: DTCart }): updateCartAction {
  return {
    type: UPDATE_CART,
    payload: cart,
  }
}

export interface cleanCartAction {
  type: typeof CLEAN_CART;
}

export function cleanCart(): cleanCartAction {
  return {
    type: CLEAN_CART,
  }
}

export type CartActions = addToCartAction | removeFromCartAction | setCantCartAction | updateCartAction | cleanCartAction;
