export interface Piece{
    name: String,
    _id:String,
    type: PieceType,
    photo: String,
    airResistance: String,
    material: String
}

export enum PieceType{
    Blade = 'Blade',
    Body = 'Body',
    Base = 'Base',
}