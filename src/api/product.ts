import { BACK_URL } from "."
import { DTProduct } from "../assets/DataTypes/DTProduct"

export async function getProducts(): Promise<DTProduct[]> {
  let token = localStorage.getItem('token')
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
}