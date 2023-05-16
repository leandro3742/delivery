import { BACK_URL } from "."
import { DTCart } from "../assets/DataTypes/DTCart";
import { DTProduct } from "../assets/DataTypes/DTProduct"

interface props {
  cart: Array<DTCart>,
}

export async function saveSale(props: props): Promise<{ message: String, status: number }> {
  try {
    const response = await fetch(`${BACK_URL}/order/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify({
        data: props.cart
      }),
    })
    return response.json()
  } catch (e: any) {
    if (e.statusCode === 401) {
      sessionStorage.removeItem('token')
      window.location.href = '/signin'
    }
    console.log(e)
    return { message: "Error", status: 500 }
  }
}