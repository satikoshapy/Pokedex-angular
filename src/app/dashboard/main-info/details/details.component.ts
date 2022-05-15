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
    this.getTotal();
   }

  ngOnChange(){
    
    
    this.ngOnInit();
  }

  ngOnInit(): void {
    
  }

  getTotal() {

    setTimeout(() => {
      this.total = this.pokemonDetails.stats.reduce((a,b) => a + b.base_stat, 0);
    }, 1000);
    
  }
  

}
