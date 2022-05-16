import { Move } from "./move.model";

export class Moves {
    constructor(
        public move: Move,
        public version_group_details: VersionGroup[],
        public url: string
       
    ) {}
}

export class VersionGroup {
    constructor(
        public level_learned_at: number
       
    ) {}
}