import { User } from "./User";
import { Piece, PieceType } from "./Piece";

export interface Windmill{
    name: String,
    description: String,
    _id: String,
    blade: Piece,
    body: Piece,
    base: Piece,
    creator: String,
    validated: ValidatedType 
}

export enum ValidatedType{
    rechazado = 'Rechazado',
    pendiente = 'Pendiente',
    aprobado = 'Aprobado',
}