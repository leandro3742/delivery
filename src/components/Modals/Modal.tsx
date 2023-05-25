import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Paper } from "@mui/material";
import { DTProduct } from "../../assets/DataTypes/DTProduct";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Counter from "../Counter";
import React, { ReactNode, useEffect, useState } from "react";
import { convertToCart, DTCart } from "../../assets/DataTypes/DTCart";
import { DTExtraIngredients } from "../../assets/DataTypes/DTExtraIngredients";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions/modal";
import { addToCart, updateCart } from "../../redux/actions/cart";
import { EnumAction } from "../../assets/DataTypes/EnumAction";


export default function Modal() {
  const stateModal = useSelector((state: AppState) => state.modal)
  const cart = useSelector((state: AppState) => state.cart)
  const dispatch = useDispatch()
  const [extras, setExtras] = useState<Array<DTExtraIngredients>>([])
  const [remove, setRemove] = useState<Array<string>>([])
  const [total, setTotal] = useState<number>(0)
  const [cant, setCant] = useState<number>(1)
  const [product, setProduct] = useState<DTCart>()

  const addExtra = (elem: DTExtraIngredients): void => {
    let aux = extras.find((extra) => extra.name === elem.name)
    aux
      ?
      setExtras(extras.filter((extra) => extra.name !== elem.name))
      :
      setExtras([...extras, elem])
  }

  const addRemove = (elem: string): void => {
    let aux = remove.find((extra) => extra === elem)
    aux
      ?
      setRemove(remove.filter((extra) => extra !== elem))
      :
      setRemove([...remove, elem])
  }

  function getTotal(): void {
    let total = product?.product?.price || 0
    total *= cant
    extras.forEach((extra) => {
      total += extra.price * cant
    })
    setTotal(total)
  }

  useEffect(() => {
    getTotal()
  }, [extras, cant])

  useEffect(() => {
    if (stateModal.data) {
      setProduct(convertToCart(stateModal.data))
    }
  }, [stateModal])

  useEffect(() => {
    if (product) {
      setExtras(product.extras)
      setRemove(product.remove)
      setCant(product.cant)
      setTotal(product.total)
    }
  }, [product])
  const saveCart = () => {
    if (stateModal.action === EnumAction.CREATE) {
      dispatch(addToCart({
        product: product?.product, extras: extras, remove: remove, cant: cant, total: total
      }))
    }
    else if (stateModal.action === EnumAction.UPDATE) {
      let aux = -1
      cart.forEach((elem, index) => {
        if (JSON.stringify(elem) === JSON.stringify(stateModal.data))
          aux = index
      })
      if (aux != -1) {
        dispatch(updateCart({ index: aux, data: { product: product?.product, extras: extras, remove: remove, cant: cant, total: total } }))
      }
    }
    dispatch(closeModal({ show: false, data: null, action: null }))
  }

  return (
    <dialog open={stateModal.show}>
      <Paper>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-full my-6 mx-auto">
            {/*content*/}
            <Paper className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold text-center">
                  {product?.product?.name}
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => dispatch(closeModal({ show: false, data: null, action: null }))}
                >
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <Paper className='my-2 p-4 flex items-center justify-between'>
                  <p className="text-2xl">Cantidad</p>
                  <Counter cant={cant} setCant={setCant} />
                </Paper>
                <Accordion className='my-2'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <h5 className="text-2xl">Ingredientes extras</h5>

                  </AccordionSummary>
                  <AccordionDetails>

                    {
                      product?.product?.extras.map((extra, index) => {
                        return (
                          <div className='flex items-center' key={extra.name}>
                            <Checkbox checked={extras.find((elem) => elem.name === extra.name) ? true : false} onChange={() => addExtra(extra)} name="gilad" />
                            <div className='flex justify-start text-xl'>
                              <p>{extra.name}</p>
                              <p className='font-semibold mx-3'>( +${extra.price} )</p>
                            </div>
                            <hr />
                          </div>
                        )
                      })
                    }
                  </AccordionDetails>
                </Accordion>

                <Accordion className='my-2'>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <h5 className="text-2xl">Quitar ingredientes</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    {product?.product?.ingredients.map((ingredient, index) => {
                      return (
                        <div className='flex items-center' key={ingredient}>
                          <Checkbox checked={remove.find(elem => elem === ingredient) ? true : false} onChange={() => addRemove(ingredient)} name="gilad" />
                          <div className='flex justify-start text-xl'>
                            <p>{ingredient}</p>
                          </div>
                          <hr />
                        </div>
                      )
                    })
                    }
                  </AccordionDetails>
                </Accordion>
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
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={saveCart}
                >
                  Guardar ${total}
                </button>
              </div>
            </Paper>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </Paper >
    </dialog >
  )
}
