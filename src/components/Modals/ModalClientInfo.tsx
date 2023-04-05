import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Paper, TextField } from "@mui/material";
import { DTProduct } from "../../assets/DataTypes/DTProduct";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Counter from "../Counter";
import React, { ReactNode, useEffect, useState } from "react";
import { DTCart } from "../../assets/DataTypes/DTCart";
import { DTExtraIngredients } from "../../assets/DataTypes/DTExtraIngredients";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions/modal";
import { addToCart, cleanCart, updateCart } from "../../redux/actions/cart";
import { EnumAction } from "../../assets/DataTypes/EnumAction";
import { saveSale } from "../../api/cart";
import { closeSpinner, openSpinner } from "../../redux/actions/spinner";
interface props {
  open: boolean,
  product?: DTProduct | undefined,
  closeModal: () => void,
  addToCart: (cart: DTCart) => void
}


export default function ModalClientInfo() {
  const stateModal = useSelector((state: AppState) => state.modal)
  const cart = useSelector((state: AppState) => state.cart)
  const dispatch = useDispatch()
  const [clientData, setClientData] = useState<{ name: string, lastName: string, phone: string }>({ name: '', lastName: '', phone: '' })
  const [showButton, setShowButton] = useState(false)

  const sendData = () => {
    if (showButton) {
      dispatch(openSpinner())
      saveSale({ cart: cart, client: clientData }).then(res => {
        // dispatch(closeModal({ show: false, data: null, action: null }))
        // dispatch(cleanCart())

        dispatch(closeSpinner())
      })
    }
  }

  useEffect(() => {
    if (clientData.name !== '' && clientData.lastName !== '' && clientData.phone !== '') {
      setShowButton(true)
    }
    else {
      setShowButton(false)
    }
  }, [clientData])
  return (
    <dialog open={stateModal.show}>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-full my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-center">
                Datos del cliente
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => dispatch(closeModal({ show: false, data: null, action: null }))}
              >
              </button>
            </div>
            {/*body*/}
            <div className="flex flex-col items-center">

              <TextField size='small' label='Nombre' sx={{ marginY: '10px' }} className='w-2/3' value={clientData.name} onChange={(e) => setClientData({ ...clientData, name: e.target.value })} />
              <TextField size='small' label='Apellido' className='w-2/3' value={clientData.lastName} onChange={(e) => setClientData({ ...clientData, lastName: e.target.value })} />
              <TextField size='small' label='Telefono' sx={{ marginY: '10px' }} className='w-2/3' value={clientData.phone} onChange={(e) => setClientData({ ...clientData, phone: e.target.value })} type='number' />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => dispatch(closeModal({ show: false, data: null, action: null }))}
              >
                Atras
              </button>
              <button
                className={`${showButton ? 'opacity-100' : 'opacity-50'} bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                type="button"
                onClick={sendData}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </dialog>
  )
}