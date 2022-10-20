import { Piece } from "./Piece"

export interface Body extends Piece{
    name: String,
    category: String,
    material: String
}