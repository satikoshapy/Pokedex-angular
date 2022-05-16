import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from 'src/shared/models/pokemon-details.model';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent implements OnInit {
  species!:PokemonDetail[];
  constructor() { }

  ngOnChanges(){
    this.ngOnInit();
  }

  ngOnInit(): void {

    this.species = JSON.parse(localStorage.getItem('species') || '[]');
  }

}
