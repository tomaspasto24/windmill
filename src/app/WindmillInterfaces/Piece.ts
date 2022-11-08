export interface Piece{
    name: string,
    _id: string,
    type: PieceType,
    photo: string,
    airResistance: string,
    material: string
}

export enum PieceType{
    Blade = 'Blade',
    Body = 'Body',
    Base = 'Base',
}