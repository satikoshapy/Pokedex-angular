import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  teamImg = "../../../../assets/img/teamImg.png";
  favImg = "../../../../assets/img/favImg.png";
  teamTitle = "Mijn Team";
  favTitle = "Favorieten"
  constructor() { }

  ngOnInit(): void {
  }

}
