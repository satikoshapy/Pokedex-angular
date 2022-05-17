import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { SidebarComponent } from '../app/dashboard/sidebar/sidebar.component';
import { ButtonComponent } from './dashboard/sidebar/button/button.component';
import { PokemonsComponent } from './dashboard/sidebar/pokemons/pokemons.component';
import { PokemonComponent } from './dashboard/sidebar/pokemons/pokemon/pokemon.component';
import { MainInfoComponent } from '../app/dashboard/main-info/main-info.component';
import { PokemonInfoComponent } from './dashboard/main-info/pokemon-info/pokemon-info.component';
import { DetailsComponent } from './dashboard/main-info/details/details.component';
import { EvolutionsComponent } from './dashboard/main-info/details/evolutions/evolutions.component';
import { EvolutionComponent } from './dashboard/main-info/details/evolutions/evolution/evolution.component';
import { HeartClickDirective } from './dashboard/main-info/heart-click.directive';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    ButtonComponent,
    PokemonsComponent,
    PokemonComponent,
    MainInfoComponent,
    PokemonInfoComponent,
    DetailsComponent,
    EvolutionsComponent,
    EvolutionComponent,
    HeartClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
