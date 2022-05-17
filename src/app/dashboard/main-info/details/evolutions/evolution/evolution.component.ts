import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from 'src/shared/models/pokemon-details.model';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css']
})
export class EvolutionComponent implements OnInit {
  
  @Input() species!:PokemonDetail[];
  constructor() { }

  ngOnChanges(){
      this.ngOnInit();
      if(this.species.length > 3){
        this.species.splice(1,4)
      }
    
  }

  ngOnInit(): void {

    if(this.species.length > 3){
      this.species.splice(1,4)
    }

    //this.species = JSON.parse(localStorage.getItem('species') || '[]');
  }

}
