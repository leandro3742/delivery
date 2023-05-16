import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers";

import { EnumAction } from "../../assets/DataTypes/EnumAction";
import Modal from "./Modal";
export default function ModalController() {
  const stateModal = useSelector((state: AppState) => state.modal)

  if (stateModal.action === EnumAction.CREATE || stateModal.action === EnumAction.UPDATE) {
    return <Modal />
  }
  return <></>
}