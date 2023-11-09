import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserService{
  constructor(http: HttpClient) {}

  // getOneUserApi(): Observable<any>{
  //   return this.http.get(this.urtest + "api/users/GetUser");
  // }

  // return this.http.get<IProjectResponse>(`${environment.baseUrl}/services/app/Project/GetAll?search=${search}`);

}
