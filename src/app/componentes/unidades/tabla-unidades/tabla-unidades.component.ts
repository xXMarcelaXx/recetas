import { Component, Input, OnInit } from '@angular/core';
import { UnidadService } from 'src/app/servicios/unidad.service';
import { Unidad } from 'src/app/models/unidad';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-unidades',
  templateUrl: './tabla-unidades.component.html',
  styleUrls: ['./tabla-unidades.component.css']
})
export class TablaUnidadesComponent implements OnInit{

  public unidades!:Unidad[];
  public formUnidad!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private UnidadService:UnidadService,
    private router:Router){}

  ngOnInit(): void {
      this.cargarDatos();
      this.formUnidad = this.formBuilder.group({
        nombre:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      });
  }

  //GET//
  cargarDatos(){
    this.UnidadService.get().subscribe(respuesta=>{
      this.unidades=respuesta;
      console.log(this.unidades);
    });
  }
  //POST
  add(){
    this.UnidadService.add(this.formUnidad.value).subscribe((data:any)=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Unidad guardada',
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
        this.UnidadService.delete(id).subscribe(respuesta=>{this.cargarDatos()});

      }
    });
  }

  editar( unidad:Unidad){
    this.router.navigate(["editarUnidad",unidad.id])
  }

  }

