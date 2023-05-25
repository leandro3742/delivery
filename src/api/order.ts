import { BACK_URL } from ".";
import { DTOrder } from "../assets/DataTypes/DTOrder";

export async function getMyOrders(type: string): Promise<Array<DTOrder>> {
  try {
    let url = ''
    if (type === 'active') url = `${BACK_URL}/order/get`
    else if (type === 'history') url = `${BACK_URL}/order/record`

    const response = await fetch(url, {
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