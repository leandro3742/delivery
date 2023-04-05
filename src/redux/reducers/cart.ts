import { enqueueSnackbar } from 'notistack';
import { Reducer } from 'redux';
import { DTCart } from '../../assets/DataTypes/DTCart';
import { ADD_TO_CART, CartActions, CLEAN_CART, REMOVE_FROM_CART, SET_CANT_CART, UPDATE_CART } from '../actions/cart'

const initialState: Array<DTCart> = []

export const CartReducer: Reducer<Array<DTCart>, CartActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      enqueueSnackbar('Producto agregado al carrito', { variant: 'success' })
      return [...state, action.payload];

    case SET_CANT_CART:
      return state.map((item) => {
        if (item.product?._id === action.payload._id) {
          return { ...item, cant: action.payload.cant };
        }
        return item;
      });

    case UPDATE_CART:
      return state.map((item, index) => {
        if (index === action.payload.index) {
          return action.payload.data;
        }
        return item;
      });

    case CLEAN_CART:
      enqueueSnackbar('Su pedido se ha realizado con éxito', { variant: 'success' })
      return [];
    default:
      return state;
  }
};