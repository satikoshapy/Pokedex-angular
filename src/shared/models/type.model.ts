export class PokemonType {
    constructor(
        public slot: number,
        public type: type
    ) {}
}

export class type {
    constructor(
        public name: string,
        public url: string
    ) {}
}