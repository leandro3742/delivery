import { BACK_URL } from ".";
import { DTOrder } from "../assets/DataTypes/DTOrder";

export async function getMyOrders(): Promise<Array<DTOrder>> {
  try {
    const response = await fetch(`${BACK_URL}/order/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
    })
    return response.json()
  }
  catch (e: any) {
    if (e.statusCode === 401) {
      sessionStorage.removeItem('token')
      window.location.href = '/signin'
    }
    return []
  }
}