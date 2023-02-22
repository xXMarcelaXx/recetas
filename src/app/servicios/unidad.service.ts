import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Unidad } from '../models/unidad';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  constructor(private http: HttpClient) { }


  get():Observable<Unidad[]>{
    return this.http.get<Unidad[]>("http://127.0.0.1:8000/api/Unidad");
  }

  add(unidad:Unidad):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/Unidad",unidad);
  }

  delete(id:number):Observable<any>{
    const url=`http://127.0.0.1:8000/api/Unidad/${id}`;
    return this.http.delete(url);
  }


  getUnidad(id:number):Observable<Unidad>{
    const url=`http://127.0.0.1:8000/api/Unidad/${id}`;
    return this.http.get<Unidad>(url);
  }

  update(unidad:Unidad,id:any):Observable<any>{
    const url=`http://127.0.0.1:8000/api/Unidad/${id}`;
    return this.http.put(url,unidad);
  }

}
