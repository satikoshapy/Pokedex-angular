import { Sprite } from "./sprite.model";
import { PokemonType } from "./type.model";

export class Pokemon {
    constructor(
        public id: number,
        public name: string,
        public sprites: Sprite,
        public types: PokemonType,
    ) {}
}