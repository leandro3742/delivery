import { combineReducers } from 'redux';
import { DTCart } from '../../assets/DataTypes/DTCart';
import { DTModal } from '../../assets/DataTypes/DTModal';
import { CartReducer } from '../reducers/cart';
import { ModalReducer } from '../reducers/modal';

export interface AppState {
  cart: Array<DTCart>
  modal: DTModal
}

const rootReducer = combineReducers<AppState>({
  cart: CartReducer,
  modal: ModalReducer
});

export default rootReducer;