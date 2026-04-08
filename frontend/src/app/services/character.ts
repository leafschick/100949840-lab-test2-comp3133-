import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

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
}