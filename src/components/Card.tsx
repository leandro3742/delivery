import { Button } from "@mui/material"
import { DTProduct } from "../assets/DataTypes/DTProduct"

interface props {
  product: DTProduct,
  action: (id: string) => void
}
export default function Card(props: props) {
  const { product, action } = props
  return (
    <div className="bg-white py-5 px-3 my-3 flex" onClick={() => action(product._id)}>
      <div className="w-4/6">
        <h2 className="text-3xl font-semibold">{product.name}</h2>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="mt-2 text-3xl font-bold">${product.price}</h2>
      </div>
      <div className="w-2/6 flex items-center">
        <img className="object-cover" src={product.image} alt="" />
      </div>
    </div>
  )
}