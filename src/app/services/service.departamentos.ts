import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Departamento } from '../models/departamento';

@Injectable()
export class ServiceDepartamentos {
  constructor(private _http: HttpClient) {}
  getDepartamentos(): Observable<any> {
    var request = 'api/departamentos';
    var url = environment.urlApiDepartamentos + request;
    return this._http.get(url);
  }
  create(departamento:Departamento):Observable<any>{
    //Debemos convertir el objeto class departamento a JSON
    var json = JSON.stringify(departamento);
    //vamos a enviar un objeto json por eso se le tiene que indicar
    //en la peticion el formato de dicho objeto lo realizamos con headers
    var header = new HttpHeaders();

    header = header.set("Content-Type", "application/json");
    var request = "api/departamentos";
    var url = environment.urlApiDepartamentos +request;
    return this._http.post(url,json,{headers:header})
  }
}
