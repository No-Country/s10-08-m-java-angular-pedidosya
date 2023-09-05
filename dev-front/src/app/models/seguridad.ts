export interface credencialesUsuario{
    email: string;
    password: string;
}

export interface respuestaAutenticacion {
    jwt: string;
    // expiracion: Date;
}

export interface usuarioDTO{
    id: string;
    email: string;
}