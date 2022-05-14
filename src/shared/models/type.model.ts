import { Move } from "./move.model";

export class PokemonType {
    constructor(
        public slot: number,
        public type: Move
    ) {}
}