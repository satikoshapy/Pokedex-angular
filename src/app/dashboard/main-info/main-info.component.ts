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
  constructor() { }

  ngOnInit(): void {
    
  }

}
