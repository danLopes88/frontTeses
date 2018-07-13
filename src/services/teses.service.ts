import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TesesService {

  private apiUrl : string = "https://agile-stream-33711.herokuapp.com/api/v1";
  //private apiUrl: string = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http: Http) { }

  getDataTeses(params) {
    return this.http.get(this.apiUrl + "/teses", params);
  }

    getTese(id: string){
    return this.http.get(this.apiUrl + "/teses/" + id);
  }

  getTeseNome(nome: string){
    return this.http.get(this.apiUrl + "/teses?title=" + nome);
  }
}
