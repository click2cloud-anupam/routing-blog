import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  url = 'https://catfact.ninja/fact';
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }
}
