import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../models/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {


  constructor(private http: HttpClient) { }


  get():Observable<Receta[]>{
    return this.http.get<Receta[]>("http://127.0.0.1:8000/api/Recetas");
  }

  add(receta:Receta):Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/Recetas",receta);
  }

  delete(id:number):Observable<any>{
    const url=`http://127.0.0.1:8000/api/Recetas/${id}`;
    return this.http.delete(url);
  }


  getUnidad(id:number):Observable<Receta>{
    const url=`http://127.0.0.1:8000/api/Recetas/${id}`;
    return this.http.get<Receta>(url);
  }

  update(receta:Receta,id:any):Observable<any>{
    const url=`http://127.0.0.1:8000/api/Recetas/${id}`;
    return this.http.put(url,receta);
  }
}
