import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VillainService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  DisplayVillains(): any {
    return this.http.get(this.baseUrl + `api/Villain/allVillains`);
  }

  GetVillainById(id: number): any {
    return this.http.get(this.baseUrl + `api/VillainallVillains/${id}`);
  }
}
