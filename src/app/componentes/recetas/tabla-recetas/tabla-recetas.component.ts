import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Receta } from 'src/app/models/receta';
import { RecetaService } from 'src/app/servicios/receta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-recetas',
  templateUrl: './tabla-recetas.component.html',
  styleUrls: ['./tabla-recetas.component.css']
})
export class TablaRecetasComponent implements OnInit{

  public recetas!:Receta[];
  public formReceta!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private RecetaService:RecetaService,
    private router:Router){}

  
  ngOnInit(): void {
      this.cargarDatos();
      this.formReceta = this.formBuilder.group({
        nombre:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        descripcion:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      });
  }

  //GET//
  cargarDatos(){
    this.RecetaService.get().subscribe(respuesta=>{
      this.recetas=respuesta;
      console.log(this.recetas);
    });
  }

  //POST
  add(){
    this.RecetaService.add(this.formReceta.value).subscribe((data:any)=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Receta guardada',
        showConfirmButton: false,
        timer: 1500
      });
      this.cargarDatos();
    },error =>
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al guardar',
      });
    });
  }

  //delete
  delete(id:number){
    Swal.fire({
      title: 'Esta seguro de eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.RecetaService.delete(id).subscribe(respuesta=>{this.cargarDatos()});

      }
    });
  }

  editar( receta:Receta){
    this.router.navigate(["editarReceta",receta.id])
  }

}
