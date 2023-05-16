import { DTExtraIngredients } from "./DTExtraIngredients";
import { DTProduct } from "./DTProduct";
import { StatusType } from "./StatusType";

export interface DTCart {
  _id?: string,
  product: DTProduct | undefined,
  extras: Array<DTExtraIngredients>,
  remove: Array<string>,
  cant: number,
  total: number,
  status?: StatusType
}

export function convertToCart(data: any): DTCart {
  return {
    product: data.product,
    extras: data.extras,
    remove: data.remove,
    cant: data.cant,
    total: data.total,
    status: StatusType.Pending
  }
}