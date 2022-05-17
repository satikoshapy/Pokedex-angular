import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from 'src/app/data-storage.service';
import { Pokemon } from 'src/shared/models/pokemon.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  teamImg = "../../../../assets/img/teamImg.png";
  favImg = "../../../../assets/img/favImg.png";
  teamTitle = "Mijn Team";
  favTitle = "Favorieten";
  pokemons$!: Pokemon[];
  @Output() pokemonId = new EventEmitter<number>();
  term!:string;
  constructor(private dataStorage: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorage.getAllPokemons().subscribe( 
      data => {
        console.log("ALL Pokemons")
        this.pokemons$ = data;
        console.log(this.pokemons$)
      })
  }

  onPokemonId(id:number){
    this.pokemonId.emit(id);
  }

  keyDownFunction(event:KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('enter pressed')
    }
  }

  getPokemonById(id:number){
    this.pokemonId.emit(id)
  }
}


