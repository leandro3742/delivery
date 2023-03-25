import { DTCart } from "../../assets/DataTypes/DTCart";
import { DTModal } from "../../assets/DataTypes/DTModal";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL"

export interface openModalAction {
  type: typeof OPEN_MODAL;
  payload: DTModal;
}

export function openModal(payload: DTModal): openModalAction {
  return {
    type: OPEN_MODAL,
    payload: payload,
  }
};

export interface closeModalAction {
  type: typeof CLOSE_MODAL;
  payload: DTModal;
}

export function closeModal(payload: DTModal): closeModalAction {
  return {
    type: CLOSE_MODAL,
    payload: payload,
  }
};


export type ModalActions = openModalAction | closeModalAction;
