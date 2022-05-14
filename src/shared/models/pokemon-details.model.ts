import { Abilities } from "./abilities.model"
import { Forms } from "./forms.model"
import { Move } from "./move.model"
import { Moves } from "./moves.model"
import { Sprites } from "./sprites.model"
import { Stats } from "./stats.model"
import { PokemonType } from "./type.model"


export class PokemonDetail {
    constructor(
        public ability: Abilities[],
        public base_experience: number,
        public forms: Forms[],
        public height: number,
        public id: number,
        public is_default: boolean,
        public location_area_encounters: string,
        public moves: Moves[],
        public name: string,
        public order: number,
        public species: Move,
        public sprites: Sprites,
        public stats: Stats[],
        public types: PokemonType[],
        public weight: number
    ) {}
}

