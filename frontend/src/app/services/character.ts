import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { Spell } from '../models/spell';
import { Movie } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private http = inject(HttpClient);
  private apiUrl = 'https://hp-api.onrender.com/api';

  fetchAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/characters`);
  }

  fetchCharactersByHouse(houseName: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/characters/house/${houseName}`);
  }

  fetchCharacterById(characterId: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/character/${characterId}`);
  }

  fetchAllSpells(): Observable<Spell[]> {
   return this.http.get<Spell[]>('https://potterhead-api.vercel.app/api/spells');
  }

  fetchAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('https://potterhead-api.vercel.app/api/movies');
  }

}