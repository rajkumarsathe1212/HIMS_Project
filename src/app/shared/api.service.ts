import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://localhost:8081/";

  constructor(private http:HttpClient) { }

  getHeader(){
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
   });
   return reqHeader;
  }

  get(api:string){
    return this.http.get(this.baseurl + api, {headers: this.getHeader()});
  }

  post(api:string,data:any){
   return this.http.post(this.baseurl + api,data, { headers: this.getHeader() });
  }

  put(api:string,data:any){
    return this.http.put(this.baseurl + api,data, {headers: this.getHeader()});
  }

  delete(api:string){
    return this.http.delete(this.baseurl + api)
  }

}
