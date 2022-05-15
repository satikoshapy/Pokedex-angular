import { Move } from "./move.model";

export class EvolutionChain {
    constructor(
        public evolves_to: evolvesTo[],
        public species: Move
       
    ) {}
}

export class evolvesTo {
    constructor(
        public evolves_to: evolvesFurther[],
        public species: Move
    ) {}
}

export class evolvesFurther {
    constructor(
        public evolves_to: [],
        public species: Move
    ) {}
}


export class EvolutionUrl {
    constructor(
        public evolution_chain: url
    ) {}
}

export class url {
    constructor(
        
           public url:string
        
    ) {}
}