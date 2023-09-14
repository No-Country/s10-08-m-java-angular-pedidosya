export enum ActionTypes {
  EDIT = 'Edit',
  DELETE = 'Delete',
  ADD = 'Add',
}

// C=Client, D: Delivery, L: Local
export enum UserTypes {
  CLIENT = 'C',
  DELIVERY = 'D',
  LOCAL = 'L',
}

export enum OrderStatus {
  NEW = 'Nuevo',
  READY_TO_PAY = 'Listo para pagar',
  IS_ORDERING = 'Ordenado',
  IS_PREPARING = 'Preparando',
  IS_DELIVERING = 'Enviando',
  FINISH = 'Finalizado',
}

export const OrderStatusNumeric: Record<OrderStatus, number> = {
  [OrderStatus.NEW]: 0,
  [OrderStatus.READY_TO_PAY]: 1,
  [OrderStatus.IS_ORDERING]: 2,
  [OrderStatus.IS_PREPARING]: 3,
  [OrderStatus.IS_DELIVERING]: 4,
  [OrderStatus.FINISH]: 5,
};
