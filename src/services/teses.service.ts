import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TesesService {

  private apiUrl : string = "https://agile-stream-33711.herokuapp.com/api/v1";

  constructor(private http: Http) { }

  getDataTeses(){
    return this.http.get(this.apiUrl + "/teses");
  }
}
