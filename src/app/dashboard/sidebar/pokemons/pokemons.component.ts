import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/data-storage.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons$!: any[];
  constructor(private dataStorage: DataStorageService) { }

  ngOnInit(): void {

    this.dataStorage.getAllPokemons().subscribe( 
      data => {
        console.log("ALL Pokemons")
        this.pokemons$ = data;
      })
  }

}
