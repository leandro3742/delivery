import { DTCart } from "./DTCart";
import { OrderType } from "./OrderType";
import { StatusType } from "./StatusType";
import { UserDto } from "./UserDto";

export interface DTOrder {
  _id?: string;
  client: UserDto;
  business: UserDto;
  type: OrderType;
  cart: Array<DTCart>;
  status: StatusType;
}