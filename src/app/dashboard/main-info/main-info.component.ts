import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {
  pokemonName = "Bulbasaur" //default for now
  constructor() { }

  ngOnInit(): void {
  }

}
