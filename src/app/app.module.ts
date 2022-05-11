import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { SidebarComponent } from '../app/dashboard/sidebar/sidebar.component';
import { ButtonComponent } from './dashboard/sidebar/button/button.component';
import { PokemonsComponent } from './dashboard/sidebar/pokemons/pokemons.component';
import { PokemonComponent } from './dashboard/sidebar/pokemons/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    ButtonComponent,
    PokemonsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
