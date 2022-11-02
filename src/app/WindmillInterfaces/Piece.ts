export interface Piece{
    name: string,
    _id: string,
    type: PieceType,
    photo: string,
    airResistance: String,
    material: String
}

export enum PieceType{
    Blade = 'Blade',
    Body = 'Body',
    Base = 'Base',
}