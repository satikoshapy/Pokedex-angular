import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/shared/models/pokemon.model';
import { PokemonType } from 'src/shared/models/type.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon!:Pokemon;
  @Output() pokemonId = new EventEmitter<number>();
  term!:string;
  constructor() { }
  
  ngOnInit(): void {
    
    
    //console.log(typeof(this.pokemon.sprites.front_default))
  }
    onSelect(id:number) {
      console.log(id)
      this.pokemonId.emit(id);
    }

    
  

}
