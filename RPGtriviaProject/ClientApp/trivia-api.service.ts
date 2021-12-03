import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TriviaApiService {
    constructor(private http: HttpClient) {

    }
}
