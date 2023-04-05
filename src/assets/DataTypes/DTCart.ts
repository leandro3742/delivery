import { DTExtraIngredients } from "./DTExtraIngredients";
import { DTProduct } from "./DTProduct";

export interface DTCart {
  product?: DTProduct,
  extras: Array<DTExtraIngredients>,
  remove: Array<string>,
  cant: number,
  total: number
}

export function convertToCart(data: any): DTCart {
  return {
    product: data.product,
    extras: data.extras,
    remove: data.remove,
    cant: data.cant,
    total: data.total,
  }
}