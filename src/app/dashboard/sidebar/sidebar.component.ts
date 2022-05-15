import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  teamImg = "../../../../assets/img/teamImg.png";
  favImg = "../../../../assets/img/favImg.png";
  teamTitle = "Mijn Team";
  favTitle = "Favorieten";
  @Output() pokemonId = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onPokemonId(id:number){
    this.pokemonId.emit(id);

    localStorage.setItem("selectedPokemonID", JSON.stringify(id));
  }

}


