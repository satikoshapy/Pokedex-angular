import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from 'src/shared/models/pokemon-details.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() pokemonDetails!:PokemonDetail;
  total!: number;
  constructor() {
    
   }

  ngOnChanges(){
    this.getTotal();
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.getTotal();
  }

  getTotal() {

    this.total = this.pokemonDetails.stats.reduce((a,b) => a + b.base_stat, 0);
    return this.total;
    
    
  }
  

}
