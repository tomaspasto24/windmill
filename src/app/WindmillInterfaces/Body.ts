import { Piece } from "./Piece"

export interface Body extends Piece{
    name: String,
    photo: String,
    airResistance: String,
    material: String
}