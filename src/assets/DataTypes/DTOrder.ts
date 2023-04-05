import { DTCart } from "./DTCart";
import { OrderType } from "./OrderType";

export interface DTOrder {
  client: string
  business: string
  address: string
  phone: string
  email: string
  type: OrderType
  cart: DTCart
}