import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) {
  }

  register(registerFormValue:Observable<any>):Observable<any>
  {
    return this.http.post(`${environment.url}/info` , registerFormValue)
  }

}
