import { Blade } from "./Blade"
import { Body } from "./Body"
import { Base } from "./Base"
import { User } from "./User"

export interface Windmill{
    name: String,
    id: number,
    blade: Blade,
    body: Body,
    base: Base,
    creator: User,
}