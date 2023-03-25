// Redux
import { ElementType } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DTCart } from '../assets/DataTypes/DTCart'
import { AppState } from '../redux/reducers'
import EditIcon from '@mui/icons-material/Edit';
import CounterRedux from '../components/CounterRedux'
import { openModal } from '../redux/actions/modal';
import { EnumAction } from '../assets/DataTypes/EnumAction';
import { Button } from '@mui/material';

interface props {
  elem: DTCart,
  action: (id: string) => void
}

const EditCart = (props: props) => {
  const { elem, action } = props
  const dispatch = useDispatch()
  console.log("text", elem)
  if (elem.product)
    return (
      <div className="text-red-600 bg-white py-5 px-3 my-3 flex shadow-lg rounded-xl" onClick={() => action(elem.product ? elem.product.category : '')}>
        <div className="w-2/6 flex items-center">
          <img className="object-cover" src={elem.product.image} alt="" />
        </div>
        <div className="w-4/6 px-4">
          <h2 className="text-2xl font-bold">{elem.product.name}</h2>
          {elem.extras.map((extra, index) => (
            <p key={index} className="mx-2 text-gray-500 text-lg">+{extra.name}</p>
          ))}
          {elem.remove.map((remove, index) => (
            <p key={index} className="mx-2 text-gray-500 text-lg">-{remove}</p>
          ))}
          <div className='flex items-center justify-between mt-2'>
            <CounterRedux _id={elem.product ? elem.product._id : ''} />
            <div className='flex cursor-pointer' onClick={() => dispatch(openModal({ show: true, data: elem, action: EnumAction.UPDATE }))}>
              <EditIcon />
              <p>Editar</p>
            </div>
          </div>
        </div>
      </div>
    )
  return <div></div>
}

const MisPedidos = () => {
  const cart = useSelector((state: AppState) => state.cart)
  const action = (id: string) => console.log(id)
  return (
    <div className='flex flex-col w-100'>
      <div className=' text-center'>
        <h3 className='text-3xl font-semibold mt-2 text-red-600'>Mi pedido</h3>
      </div>
      <div className='mx-4'>
        {cart.map((item: DTCart, index: number) => {
          console.log("CARRT", item)
          if (item.product)
            return (
              <EditCart elem={item} key={index} action={action} />
            )
        })}
      </div>
      {/* {cart. */}
      <div className='flex justify-end m-3'>
        <Button variant='contained' size='small' color='error'>Finalizar compra</Button>
      </div>
    </div>
  )
}

export default MisPedidos