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
  species = [PokemonDetail];
  constructor(private dataStorage: DataStorageService) { }

  ngOnChanges(){
    this.ngOnInit();
  }

  ngOnInit(): void {
  }

  

}
