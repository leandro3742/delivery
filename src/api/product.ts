import { BACK_URL } from "."
import { DTProduct } from "../assets/DataTypes/DTProduct"

export async function getProducts(): Promise<DTProduct[]> {
  const response = await fetch(`${BACK_URL}/product/get`)
  if (!response.ok) {
    throw new Error('Failed to fetch products.')
  }
  const data = await response.json()
  return data
}