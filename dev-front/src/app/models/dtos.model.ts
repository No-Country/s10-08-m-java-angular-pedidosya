export interface userCredentials{
    email: string;
    password: string;
}

export interface responseAuthentication {
    jwt: string;
    // expiracion: Date;
}

export interface SignUpDTO {
	firstName: string,
	lastName: string,
	active: boolean,
	user: userDTO
}

export interface userDTO {
	email: string,
	password: string,
	role: string
}  