import { DTCart } from "./DTCart";
import { EnumAction } from "./EnumAction";

export interface DTModal {
  show: boolean,
  data: DTCart | Array<DTCart> | null,
  action: EnumAction | null,
}
