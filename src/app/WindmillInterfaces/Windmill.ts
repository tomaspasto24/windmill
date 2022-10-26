import { User } from "./User";
import { Piece, PieceType } from "./Piece";

export interface Windmill{
    name: String,
    _id: String,
    blade: Piece,
    body: Piece,
    base: Piece,
    creator: User,
    validated: false
}