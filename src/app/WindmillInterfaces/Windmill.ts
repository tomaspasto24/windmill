import { Blade } from "./Blade"
import { Body } from "./Body"
import { Base } from "./Base"

export interface Windmill{
    name: String,
    id: String,
    blade: Blade,
    body: Body,
    base: Base
}