import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from 'src/app/data-storage.service';
import { Pokemon } from 'src/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons$!: Pokemon[];
  @Output() pokemonId = new EventEmitter<number>();
  constructor(private dataStorage: DataStorageService) { }
  
  ngOnInit(): void {
    
    this.dataStorage.getAllPokemons().subscribe( 
      data => {
        console.log("ALL Pokemons")
        this.pokemons$ = data;
        console.log(this.pokemons$)
      })
  }

  

}
