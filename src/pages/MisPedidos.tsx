// Redux

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DTCart } from '../assets/DataTypes/DTCart'
import { AppState } from '../redux/reducers'
import EditIcon from '@mui/icons-material/Edit';
import CounterRedux from '../components/CounterRedux'
import { openModal } from '../redux/actions/modal';
import { EnumAction } from '../assets/DataTypes/EnumAction';
import { Button, Paper } from '@mui/material';
import { saveSale } from '../api/cart';
import { closeSpinner, openSpinner } from '../redux/actions/spinner';
import { enqueueSnackbar } from 'notistack';
import { getMyOrders } from '../api/order';
import { DTOrder } from '../assets/DataTypes/DTOrder';
import { io } from 'socket.io-client';
import { BACK_URL } from '../api';
import PostIt from '../components/PostIt';

interface props {
  elem: DTCart,
  action: (id: string) => void
}

const EditCart = (props: props) => {
  const { elem, action } = props
  const dispatch = useDispatch()

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
            {/* <CounterRedux _id={elem.product ? elem.product._id : ''} /> */}
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
  const dispatch = useDispatch();
  const [orders, setOrders] = useState<Array<DTOrder>>([])
  const [typeOrders, setTypeOrders] = useState<string>('active')

  const buy = async () => {
    dispatch(openSpinner())
    saveSale({ cart })
      .then(response => enqueueSnackbar(response.message, { variant: 'success' }))
      .catch(error => enqueueSnackbar('Error de conexión', { variant: 'error' }))
      .finally(() => dispatch(closeSpinner()))
  }

  useEffect(() => {
    const socket = io(BACK_URL, {
      transports: ['websocket'],
      query: {
        token: sessionStorage.getItem('token')
      }
    });

    socket.on('connect', () => {
      console.log('Conexión establecida');
    });

    socket.on('disconnect', () => {
      console.log('Conexión cerrada');
    });

    socket.on('message', (message) => {
      dispatch(openSpinner())
      if (typeOrders === 'active') {
        getMyOrders('active')
          .then(response => setOrders(response))
          .catch(error => enqueueSnackbar('Error de conexión', { variant: 'error' }))
          .finally(() => dispatch(closeSpinner()))
      }
      else if (typeOrders === 'history') {
        getMyOrders('history')
          .then(response => setOrders(response))
          .catch(error => enqueueSnackbar('Error de conexión', { variant: 'error' }))
          .finally(() => dispatch(closeSpinner()))
      }
    });

    return () => {
      socket.disconnect();
    }
  }, []);

  useEffect(() => {
    if (typeOrders === 'active') {
      dispatch(openSpinner())
      getMyOrders('active')
        .then(response => setOrders(response))
        .catch(error => enqueueSnackbar('Error de conexión', { variant: 'error' }))
        .finally(() => dispatch(closeSpinner()))
    }
    else if (typeOrders === 'history') {
      dispatch(openSpinner())
      getMyOrders('history')
        .then(response => setOrders(response))
        .catch(error => enqueueSnackbar('Error de conexión', { variant: 'error' }))
        .finally(() => dispatch(closeSpinner()))
    }
  }, [typeOrders])

  return (
    <div className='flex flex-col w-100'>
      {cart.length > 0 &&
        <>
          <div className=' text-center'>
            <h3 className='text-3xl font-semibold mt-2 text-red-600'>Mi pedido</h3>
          </div>
          <div className='mx-4'>
            {cart.map((item: DTCart, index: number) => {
              if (item.product)
                return (
                  <EditCart elem={item} key={index} action={action} />
                )
            })}
          </div>
          <div className='flex justify-end m-3'>
            <Button variant='contained' size='small' color='error' onClick={buy}>Finalizar compra</Button>
          </div>
        </>
      }
      <div className='text-center'>
        <div className="flex flex-col sm:flex-row justify-end mt-2 p-2">
          {typeOrders === 'active'
            ? <button className='bg-red-600 text-white rounded-xl px-4 py-2' onClick={() => setTypeOrders('history')}>Mostrar historial</button>
            : <button className='bg-red-600 text-white rounded-xl px-4 py-2' onClick={() => setTypeOrders('active')}>Mostrar Ordenes activas</button>
          }
        </div>
        <h3 className='text-3xl font-semibold mt-2 text-red-600'>
          {typeOrders === 'active' ? 'Ordenes activas' : 'Historial'}
        </h3>
        <div className='flex flex-wrap justify-around mt-5'>
          {orders.map((order, index) => (
            <PostIt index={index} key={order._id} order={order} />
          ))}
        </div>
      </div>
    </div >

  )
}

export default MisPedidos