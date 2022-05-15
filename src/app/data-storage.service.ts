import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/shared/models/pokemon.model';
import { EvolutionUrl } from 'src/shared/models/evolution-chain.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  url: string = "https://pokeapi.co/api/v2/pokemon/";
  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<any> {
    return this.http.get<any>('https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon').pipe()

  }

  getPokemonById(id: number): Observable<any> {
    return this.http.get<any>(this.url + id)
  }

  getEvolutionChainUrl(id: number): Observable<EvolutionUrl> {
    return this.http.get<EvolutionUrl>('https://pokeapi.co/api/v2/pokemon-species/' + id)
  }

  getEvolutionChain(url:string): Observable<any> {
    return this.http.get<any>(url)
  }
}
