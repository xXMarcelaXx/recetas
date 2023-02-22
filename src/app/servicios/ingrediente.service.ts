import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ingrediente, ingre } from '../models/ingredeinte';
import { Unidad } from '../models/unidad';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  constructor(private http: HttpClient) { }


  get():Observable<Ingrediente[]>{
    return this.http.get<Ingrediente[]>("http://127.0.0.1:8000/api/Ingrediente");
  }

  add(ingredeinte:ingre):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/Ingrediente",ingredeinte);
  }

  delete(id:number):Observable<any>{
    const url=`http://127.0.0.1:8000/api/Ingrediente/${id}`;
    return this.http.delete(url);
  }


  getIngrediente(id:number):Observable<ingre>{
    const url=`http://127.0.0.1:8000/api/Ingrediente/${id}`;
    return this.http.get<ingre>(url);
  }

  update(ingredeinte:ingre,id:any):Observable<any>{
    const url=`http://127.0.0.1:8000/api/Ingrediente/${id}`;
    return this.http.put(url,ingredeinte);
  }
}
