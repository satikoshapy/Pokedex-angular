import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/data-storage.service';
import { EvolutionChain } from 'src/shared/models/evolution-chain.model';
import { PokemonDetail } from 'src/shared/models/pokemon-details.model';

@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.css']
})
export class EvolutionsComponent implements OnInit {
  @Input() evolutionChain!: EvolutionChain;
  species = [PokemonDetail];
  species$!:any[];
  chainUrl!:string[];
  constructor(private dataStorage: DataStorageService) { }

  ngOnChanges(){
    this.ngOnInit();
  }

  ngOnInit(): void {
   setTimeout(() => {
     ///GET THE URLS OF EACH SPECIE IN THE EVOLUTION CHAIN
     if (this.evolutionChain.evolves_to[0].evolves_to.length === 0 ){
    
       this.chainUrl = [this.evolutionChain.species.url, this.evolutionChain.evolves_to[0].species.url, ];
     }

     else {
       this.chainUrl = [this.evolutionChain.species.url, this.evolutionChain.evolves_to[0].species.url, this.evolutionChain.evolves_to[0].evolves_to[0].species.url];
      }
    console.log('got the array of specie urls', this.chainUrl);
    /// GET ID OF EACH SPECIE FROM THEIR URL
    const specieId = this.chainUrl.map((item) => parseInt(item.split('/').reverse()[1]));
    console.log('split them up good', specieId);
   
      for (let id of specieId){
        this.dataStorage.getPokemonById(id).subscribe(
          data => {
          this.species.push(data);
          
          //localStorage.setItem('species', JSON.stringify(this.species.slice(1,4)));
          
        })
      }
      console.log('lets see what we got from the DB', this.species)
      this.species$ = this.species;
      console.log('prepare to pass the evol', this.species$)
      this.species.splice(0);
      //this.species = this.species.slice(1,4);
      console.log('new chain', this.species)
    }, 500);

    
    
    
  }

}
