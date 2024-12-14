import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Para animaciones de Angular Material

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { DashboardClienteComponent } from './components/dashboard-cliente/dashboard-cliente.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PanelEntrenadorComponent } from './components/panel-entrenador/panel-entrenador.component';
import { CrearPlanComponent } from './components/crear-plan/crear-plan.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { PlanEntrenamientoComponent } from './components/plan-entrenamiento/plan-entrenamiento.component';
import { MatCardModule } from '@angular/material/card';
import { RegistroEntrenadorComponent } from './components/registro-entrenador/registro-entrenador.component';
import { EjercicioService } from './core/services/ejercicio.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardClienteComponent,
    LayoutComponent,
    PanelEntrenadorComponent,
    CrearPlanComponent,
    StudentDetailsComponent,
    RegistroUserComponent,
    AgregarAlumnoComponent,
    PlanEntrenamientoComponent,
    RegistroEntrenadorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // Necesario para Angular Material
    MatFormFieldModule, // Campo de formulario
    MatInputModule, // Inputs
    MatButtonModule, // Botones
    MatTableModule, // Tablas
    MatIconModule, // Opcional si usas iconos
    MatCardModule // Tarjetas
  ],
  providers: [EjercicioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
