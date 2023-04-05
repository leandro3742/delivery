import { BACK_URL } from "."
import { DTCart } from "../assets/DataTypes/DTCart";
import { DTProduct } from "../assets/DataTypes/DTProduct"

interface props {
  cart: Array<DTCart>,
  client: {
    name: string,
    lastName: string,
    phone: string,
  }
}

export async function saveSale(props: props): Promise<{ message: String, status: number }> {

  let raw = {
    data: {
      cart: props.cart,
      client: props.client,
    }
  }

  const response = await fetch(`${BACK_URL}/order/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(raw),
  })
  console.log(response)
  return response.json()
}