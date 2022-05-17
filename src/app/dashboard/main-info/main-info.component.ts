import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from 'src/shared/models/pokemon-details.model';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {
  @Input() pokemonDetails!:PokemonDetail
  pokemonName = "Bulbasaur" //default for now
  likedPokemons!:PokemonDetail[];

  constructor() { }

  ngOnChanes() {
    this.ngOnInit();
    localStorage.setItem("selectedPokemonID", JSON.stringify(this.pokemonDetails.id));
  }

  ngOnInit(): void {
    
  }

  onLike(){
    //check if there's already something in the favorites
    if (localStorage.getItem('favorites') == null){
      localStorage.setItem("favorites", '[]');
    }

    //get the favorites and slap it to the newly liked poke
    const likedPokemons = JSON.parse(localStorage.getItem('favorites') || '[]');

    likedPokemons.push(this.pokemonDetails);
    localStorage.setItem('favorites', JSON.stringify(likedPokemons));

  }
}
