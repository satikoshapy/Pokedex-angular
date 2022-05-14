import { Ability } from "./ability.model";

export class Abilities {
    constructor(
        public ability: Ability, 
        public is_hidden: boolean,
        public slot: number
       
    ) {}
}