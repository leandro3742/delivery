import { StatusType } from "./DataTypes/StatusType";

export const COLORS = {
  [StatusType.Pendiente]: '#FFC107',
  [StatusType.Confirmado]: '#FF9800',
  [StatusType.Entregado]: '#4CAF50',
  [StatusType.Cancelado]: '#FF5722',
}