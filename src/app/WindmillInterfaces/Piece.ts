export interface Piece{
    name: string,
    _id: string,
    type: PieceType,
    photo: string,
    airResistance: string,
    material: string
}

export enum PieceType{
    Blade = 'Aspa',
    Body = 'Cuerpo',
    Base = 'Base',
}