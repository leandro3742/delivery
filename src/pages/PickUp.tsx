import { useEffect, useState } from "react"
import Tags from "../components/Tags"
import Card from "../components/Card"
import { products } from "../mock/products"
import Modal from "../components/Modal"
import { DTCart } from "../assets/DataTypes/DTCart"
import { Autocomplete, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { business } from "../mock/business"
// Redux
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import { openModal } from "../redux/actions/modal"
import { DTProduct } from "../assets/DataTypes/DTProduct"
import { EnumAction } from "../assets/DataTypes/EnumAction"
import { Link } from "react-router-dom"

const PickUp = () => {
  const dispatch = useDispatch()

  const [selected, setSelected] = useState('Lo mas vendido')

  const addProduct = (id: string) => {
    let aux: DTProduct | undefined = products.find((product) => product._id === id)
    if (aux) {
      let newCart: DTCart = { product: aux, cant: 1, extras: [], remove: [], total: aux.price }
      dispatch(openModal({ show: true, data: newCart, action: EnumAction.CREATE }))
    }
  }

  return (
    <div>
      <Tags selected={selected} setSelected={setSelected} />
      <div style={{ position: 'fixed', overflowY: 'scroll', top: '120px', height: 'calc(100vh - 170px)' }}>
        {products.map((product) => (
          <div key={product._id}>
            <Card product={product} action={addProduct} />
            <hr />
          </div>
        ))}
      </div>
      <div style={{ position: 'fixed', bottom: '10px', width: '100%', }} className="flex justify-end mt-4 px-5">
        <Link to='/mis-pedidos'><Button variant='contained' color="error">Ver mi pedido</Button></Link>
      </div>
      {/* <Modal open={modal} closeModal={closeModal} product={product} addToCart={addToCart2} /> */}
    </div>
  )
}

export default PickUp