import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthLogin, IAuth, IAuthRegister } from '../Interface/authInterface';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  constructor(private http: HttpClient) { }

  getLogin(payLoad: IAuthLogin){
    return this.http.post<IAuth>(`${environment.baseUrl}/login`, payLoad);
  }

  getRegister(payLoad: IAuthRegister): Observable<any>{
    return this.http.post(`${environment.baseUrl}/register`, payLoad);
  }
}
