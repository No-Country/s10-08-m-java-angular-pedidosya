import { UserModel } from "./user.model";

export interface Sesion{
    sesionActiva: boolean;
    usuarioActivo?: UserModel;
}