export interface userCredentials{
    email: string;
    password: string;
}

export interface responseAuthentication {
    jwt: string;
}

export interface SignUpDTO {
	firstName: string,
	lastName: string,
	active: boolean,
	user: {
		email: string,
		password: string,
		role: string
	} 
}

export interface ClientUpdateDTO {
	idClient: number,
	firstName: string,
	lastName: string,
	active: boolean,
	user: userDTO
}

export interface userDTO {
	idUser: number,
	email: string,
	password: string,
	role: string
}  

 

