import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { EditarIngredienteComponent } from './componentes/ingredientes/editar-ingrediente/editar-ingrediente.component';
import { TablaIngredientesComponent } from './componentes/ingredientes/tabla-ingredientes/tabla-ingredientes.component';
import { EditarRecetaComponent } from './componentes/recetas/editar-receta/editar-receta.component';
import { TablaRecetasComponent } from './componentes/recetas/tabla-recetas/tabla-recetas.component';
import { ActializarUnidadComponent } from './componentes/unidades/actializar-unidad/actializar-unidad.component';
import { TablaUnidadesComponent } from './componentes/unidades/tabla-unidades/tabla-unidades.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"unidades", component:TablaUnidadesComponent},
  {path:"editarUnidad/:id", component:ActializarUnidadComponent},
  {path:"ingredientes", component:TablaIngredientesComponent},
  {path:"editarIngrediente/:id", component:EditarIngredienteComponent},
  {path:"recetas", component:TablaRecetasComponent},
  {path:"editarReceta/:id", component:EditarRecetaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
