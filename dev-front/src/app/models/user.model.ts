export interface UserModel {
	idUser: number;
	email: string;
	password: string;
	rol: string;
}

//esto es lo que recibimos al hacer un get de user

export interface User {
	idClient: number,
	firstName: string,
	lastName: string,
	active: boolean,
	user: {
		idUser: number,
		email: string,
		role: string
	}
}

