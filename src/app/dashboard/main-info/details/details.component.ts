import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/data-storage.service';
import { EvolutionChain, EvolutionUrl } from 'src/shared/models/evolution-chain.model';
import { PokemonDetail } from 'src/shared/models/pokemon-details.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() pokemonDetails!:PokemonDetail;
  total!: number;
  pokemon_id!:any;
  evolutionChainUrl!:string;
  evolutionChains$!: EvolutionChain;
  constructor(private dataStorage: DataStorageService) {
    
   }

  ngOnChanges(){
    this.getTotal();
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.getTotal();

    this.pokemon_id = localStorage.getItem('selectedPokemonID');

    console.log(this.pokemon_id)
    
    setTimeout(() => {
      this.dataStorage.getEvolutionChainUrl(this.pokemon_id).subscribe(
        data => {
          console.log(data.evolution_chain.url)
          this.evolutionChainUrl = data.evolution_chain.url
        })
      this.dataStorage.getEvolutionChain(this.evolutionChainUrl).subscribe(
        data => 
        {
          this.evolutionChains$ = data.chain;
          console.log(this.evolutionChains$)
        }
      )
    }, 1500);
    
  }

  getTotal() {

    this.total = this.pokemonDetails.stats.reduce((a,b) => a + b.base_stat, 0);
    return this.total;
    
    
  }
  

}
