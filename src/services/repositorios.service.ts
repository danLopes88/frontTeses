import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoriosService {

  private apiUrl = "https://agile-stream-33711.herokuapp.com/api/v1";

  constructor(private http: Http) {
  }


  getDataRepositorios(){
  	return this.http.get(this.apiUrl + "/repositories");
  }

  getRepositorio(id: string){
    return this.http.get(this.apiUrl + "/repositories/" + id);
  }

  addRepositorio(){
    
  }
}
