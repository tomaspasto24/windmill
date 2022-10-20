import { Piece } from "./Piece"

export interface Base extends Piece{
    name: String,
    category: String,
    material: String
}