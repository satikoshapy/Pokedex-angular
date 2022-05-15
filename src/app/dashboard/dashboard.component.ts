import { Component,  OnInit } from '@angular/core';
import { PokemonDetail } from 'src/shared/models/pokemon-details.model';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pokemonDetails$!:PokemonDetail
  constructor(private dataStorage: DataStorageService) { }

  ngOnInit(): void {

    this.dataStorage.getPokemonById(1).subscribe(
      data => {
        console.log("Initial pokemon")
        this.pokemonDetails$ = data;
        console.log(this.pokemonDetails$)
      })
  }
  getPokemonById(id:number){
  this.dataStorage.getPokemonById(id).subscribe(
    data => {
      console.log("ALL Pokemons")
      this.pokemonDetails$ = data;
      console.log(this.pokemonDetails$)
    })
  }
}
