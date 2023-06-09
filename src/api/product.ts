import { BACK_URL } from "."
import { DTProduct } from "../assets/DataTypes/DTProduct"

export async function getProducts(): Promise<DTProduct[]> {
  try {
    let token = sessionStorage.getItem('token')
    const response = await fetch(`${BACK_URL}/product/get`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch products.')
    }
    const data = await response.json()
    return data
  } catch (e: any) {
    if (e.statusCode === 401) {
      sessionStorage.removeItem('token')
      window.location.href = '/signin'
    }
    console.log(e)
    return []
  }
}