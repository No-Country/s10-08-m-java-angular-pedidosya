export interface AddressDTO {
    idClient: number,
    address: {
        idAddress: number,
        description: string,
        latitude: number,
        longitude: number,
        idCity: number
    },
    set: boolean
}

export interface AddressPostDTO {
    idClient: number,
    address: {
        description: string,
        latitude: number,
        longitude: number,
        idCity: number
    },
    set: boolean
}

export interface AddressGet {
    idClient: number
}

export interface Address {
    address: {
        idAddress: number,
        description: string,
        latitude: DoubleRange,
        longitude: DoubleRange,
        idCity: number
    },
}