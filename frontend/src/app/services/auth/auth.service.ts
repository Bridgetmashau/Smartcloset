import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl ='http://localhost:4000/users/'

  constructor(private Http:HttpClient) { }



  set_register(register_data:any){
    return this.Http.post(`${this.baseUrl}register`,register_data)
  }


  set_login(login_data:any){
    return this.Http.post(`${this.baseUrl}login`,login_data)
  }

  

}






