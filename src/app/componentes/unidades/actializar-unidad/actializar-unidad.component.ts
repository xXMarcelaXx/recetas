import { Component, OnInit } from '@angular/core';
import { UnidadService } from 'src/app/servicios/unidad.service';
import { Unidad } from 'src/app/models/unidad';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actializar-unidad',
  templateUrl: './actializar-unidad.component.html',
  styleUrls: ['./actializar-unidad.component.css']
})
export class ActializarUnidadComponent implements OnInit{

  constructor(private formBuilder: FormBuilder,
    private UnidadService:UnidadService, 
    private router:Router,
    private route:ActivatedRoute){}

  public unidad!:Unidad
  public formEditarUnidad!:FormGroup
  id?:number;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.UnidadService.getUnidad(this.id).subscribe(data=>{
      this.unidad=data
    })

    this.formEditarUnidad = this.formBuilder.group({
      nombre:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    });
  }

  editar(){
    this.UnidadService.update(this.formEditarUnidad.value,this.id).subscribe(respuesta=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Unidad Actualizada',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(["unidades"])
    },error =>
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al guardar',
      });
      this.router.navigate(["unidades"])
    });
    }
  }




