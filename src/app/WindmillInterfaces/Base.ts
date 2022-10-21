import { Piece } from "./Piece"

export interface Base extends Piece{
    name: String,
    photo: String,
    airResistance: String,
    material: String
}