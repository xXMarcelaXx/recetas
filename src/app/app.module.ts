import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { TablaUnidadesComponent } from './componentes/unidades/tabla-unidades/tabla-unidades.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActializarUnidadComponent } from './componentes/unidades/actializar-unidad/actializar-unidad.component';
import { TablaIngredientesComponent } from './componentes/ingredientes/tabla-ingredientes/tabla-ingredientes.component';
import { EditarIngredienteComponent } from './componentes/ingredientes/editar-ingrediente/editar-ingrediente.component';
import { TablaRecetasComponent } from './componentes/recetas/tabla-recetas/tabla-recetas.component';
import { EditarRecetaComponent } from './componentes/recetas/editar-receta/editar-receta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TablaUnidadesComponent,
    NavbarComponent,
    ActializarUnidadComponent,
    TablaIngredientesComponent,
    EditarIngredienteComponent,
    TablaRecetasComponent,
    EditarRecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
