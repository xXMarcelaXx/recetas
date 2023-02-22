import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ingre, Ingrediente } from 'src/app/models/ingredeinte';
import { Unidad } from 'src/app/models/unidad';
import { IngredienteService } from 'src/app/servicios/ingrediente.service';
import { UnidadService } from 'src/app/servicios/unidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-ingrediente',
  templateUrl: './editar-ingrediente.component.html',
  styleUrls: ['./editar-ingrediente.component.css']
})
export class EditarIngredienteComponent implements OnInit{


  public unidades!:Unidad[];
  public ingrediente!:ingre;
  public formIngredienteE!:FormGroup;
  id?:number;

  constructor(private formBuilder: FormBuilder,
    private UnidadService:UnidadService, 
    private IngredienteService:IngredienteService,
    private router:Router,
    private route:ActivatedRoute){}

  


  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.formIngredienteE = this.formBuilder.group({
      nombre:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      unidad_id:['',[Validators.required,Validators.minLength(1)]]
    });
    this.UnidadService.get().subscribe(data=>{
      this.unidades=data  
    });

    this.IngredienteService.getIngrediente(this.id).subscribe(data=>{
      this.ingrediente=data
    })
  }

  editar(){
    this.IngredienteService.update(this.formIngredienteE.value,this.id).subscribe(respuesta=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ingrediente Actualizada',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(["ingredientes"])
    },error =>
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al guardar',
      });
      this.router.navigate(["ingredientes"])
    });
    }

}
