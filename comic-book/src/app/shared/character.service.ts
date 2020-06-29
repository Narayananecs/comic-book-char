import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  apiKey: string="06fda2a220cd40de89c82bcc4403da0c4971e40e";
  // getCharacters() {
  //   return this.http.get(`https://comicvine.gamespot.com/api/characters/?api_key=${this.apiKey}&limit=10&format=json`)
  // }
}
