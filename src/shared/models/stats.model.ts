export class Stats {
    constructor(
        public base_stat: number,
        public effort: number,
        public stat: Stat
       
    ) {}
}

export class Stat {
    constructor(
        public name: string
    ) {}
}

