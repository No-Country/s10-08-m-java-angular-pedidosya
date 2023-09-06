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

