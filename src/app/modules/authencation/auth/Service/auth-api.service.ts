import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthLogin, IAuth } from '../Interface/authInterface';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  constructor(private http: HttpClient) { }

  getLogin(payLoad: IAuthLogin){
    return this.http.post<IAuth>(`${environment.baseUrl}/login`, payLoad);
  }

  // getRegister(){

  // }
}
