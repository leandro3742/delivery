import { COLORS } from '../assets/Colors'
import { DTCart } from '../assets/DataTypes/DTCart'
import { DTOrder } from '../assets/DataTypes/DTOrder'
import '../styles/PostIt.css'

interface props {
  order: DTOrder,
  index: number
}

const PostIt = (props: props) => {
  const { order, index } = props
  const getTotal = (cart: Array<DTCart>) => {
    let total = 0
    cart.forEach((item) => {
      if (item.product)
        total += item.total
    })
    return total
  }
  return (
    <div style={{ backgroundColor: COLORS[order.status] }} className={`postIt-container ${index % 2 === 0 ? 'isEven' : ''}`} >
      <h1>{order.business.name}</h1>
      {order.cart.map((item) => (
        <div key={item._id} className='mt-3 flex flex-col items-start'>
          <span className='text-xl'><b>Producto:</b> {item.product?.name}</span>
          <span className='text-xl'><b>Cantidad: </b> {item.cant}</span>
          <div className='flex'>
            <span className='text-xl'><b>Extras: </b></span>
            {item.extras.length === 0 && <span className='mx-1'>----</span>}
            {item.extras.map((extra) => (
              <span className='mx-1 text-xl' key={extra.name}>{extra.name}</span>
            ))}
          </div>
          <div className='flex flex-wrap'>
            <span className='text-xl'> <b>Quitar: </b> </span>
            {item.remove.length === 0 && <span className='mx-1'>----</span>}
            <div>
              {item.remove.map((remove) => (
                <span className='text-xl' key={remove}>{remove},</span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className='mt-3'>
        <span className='text-xl'><b>Estado del pedido:</b> {order.status}</span>
      </div>
      <div className='flex justify-end'>
        <span className='text-xl'><b>Precio:${getTotal(order.cart)} </b> </span>
      </div>
    </div>
  )
}

export default PostIt