import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingrediente } from 'src/app/models/ingredeinte';
import { Unidad } from 'src/app/models/unidad';
import { IngredienteService } from 'src/app/servicios/ingrediente.service';
import { UnidadService } from 'src/app/servicios/unidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-ingredientes',
  templateUrl: './tabla-ingredientes.component.html',
  styleUrls: ['./tabla-ingredientes.component.css']
})
export class TablaIngredientesComponent implements OnInit{

  public ingredientes!:Ingrediente[];
  public unidades!:Unidad[];
  public formIngrediente!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private IngredienteService:IngredienteService,
    private UnidadeService:UnidadService,
    private router:Router){}


  ngOnInit(): void {
    this.cargarDatos();
    this.cargarUnidades();
    this.formIngrediente = this.formBuilder.group({
      nombre:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      unidad_id:['',[Validators.required,Validators.minLength(1)]]
    });
  }
    //GET//
  cargarDatos(){
    this.IngredienteService.get().subscribe(respuesta=>{
      this.ingredientes=respuesta;
      console.log(this.ingredientes);
    });
  }

  cargarUnidades(){
    this.UnidadeService.get().subscribe(respuesta=>{
      this.unidades=respuesta;
      console.log(this.unidades);
    });
  }

  add(){
    this.IngredienteService.add(this.formIngrediente.value).subscribe((data:any)=>{
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
        this.IngredienteService.delete(id).subscribe(respuesta=>{this.cargarDatos()});

      }
    });
  }

  editar(ingredeinte:Ingrediente){
    this.router.navigate(["editarIngrediente",ingredeinte.ingrediente_id])
  }

}
