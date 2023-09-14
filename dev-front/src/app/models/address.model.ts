export interface AddressModel {
  id: number,
  description: string,
  latitude: number,
  longitude: number,
}

export const INITIAL_STATE_ADDRESS: AddressModel = {
  id: 0,
  description: "",
  latitude: 0,
  longitude: 0,
}
