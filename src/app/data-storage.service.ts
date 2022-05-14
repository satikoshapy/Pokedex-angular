import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  url: string = "https://pokeapi.co/api/v2/pokemon";
  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe()

  }
}
