import { StatusType } from "./DataTypes/StatusType";

export const COLORS = {
  [StatusType.Pendiente]: 'rgb(255, 255, 204)',
  [StatusType.Confirmado]: 'rgb(204,255,204)',
  [StatusType.Entregado]: 'rgb(204,255,255)',
  [StatusType.Cancelado]: 'rgb(255, 204, 204)',
}