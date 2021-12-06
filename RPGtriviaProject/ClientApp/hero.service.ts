import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  DisplayHeroes(): any {
    return this.http.get(this.baseUrl + `api/HeroClass/allClasses`);
  }

  GetHeroById(id: number): any {
    return this.http.get(this.baseUrl + `api/Heroclass/allClasses/${id}`);
  }
}
