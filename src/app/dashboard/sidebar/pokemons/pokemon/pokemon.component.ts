import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataStorageService } from 'src/app/data-storage.service';
import { EvolutionChain } from 'src/shared/models/evolution-chain.model';
import { PokemonDetail } from 'src/shared/models/pokemon-details.model';
import { Pokemon } from 'src/shared/models/pokemon.model';
import { PokemonType } from 'src/shared/models/type.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon!:Pokemon;
  @Output() pokemonId = new EventEmitter<number>();
  
  pokemon_id!:any;
  evolutionChainUrl!:string;
  evolutionChains$!: EvolutionChain;
  species = [PokemonDetail];
  constructor(private dataStorage: DataStorageService) { }
  
  ngOnInit(): void {
    
    
    //console.log(typeof(this.pokemon.sprites.front_default))
  }
    onSelect(id:number) {
      console.log(id)
      this.pokemonId.emit(id);

      this.onSelected();
    }

    onSelected(){
      this.pokemon_id = localStorage.getItem('selectedPokemonID');
  
      console.log(this.pokemon_id)
  
      this.dataStorage.getEvolutionChainUrl(this.pokemon_id);
      
      setTimeout(() => {
        
        this.evolutionChains$ = JSON.parse(localStorage.getItem('evolutionChain') || '{}');
  
        this.getEvolutionSpecies();
      }, 1000);
    }

    getEvolutionSpecies(){
      ///GET THE URLS OF EACH SPECIE IN THE EVOLUTION CHAIN
      const specieUrl = [this.evolutionChains$.species.url, this.evolutionChains$.evolves_to[0].species.url, this.evolutionChains$.evolves_to[0].evolves_to[0].species.url];
      console.log(specieUrl);
      /// GET ID OF EACH SPECIE FROM THEIR URL
      const specieId = specieUrl.map((item) => parseInt(item.split('/').reverse()[1]));
      console.log(specieId);
  
      setTimeout(() => {
        for (let id of specieId){
          this.dataStorage.getPokemonById(id).subscribe(
            data => {
            this.species.push(data);
            console.log(this.species)
          })
        }
        
        //this.species = this.species.slice(1,4);
        localStorage.setItem('species', JSON.stringify(this.species.slice(1,4)));
      }, 500);
  
      
  
      
    }
  

}
