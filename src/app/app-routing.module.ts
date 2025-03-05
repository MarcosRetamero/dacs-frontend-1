import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './core/guard/auth.guard';
import { DashboardClienteComponent } from './components/dashboard-cliente/dashboard-cliente.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CrearPlanComponent } from './components/crear-plan/crear-plan.component';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { PlanEntrenamientoComponent } from './components/plan-entrenamiento/plan-entrenamiento.component';
import { CreateRoutineComponent } from './components/agregar-ejercicios/agregar-ejercicios.component';

const routes: Routes = [
//  { path: '', canActivate: [AuthGuard]},
//{ path: '**', redirectTo: '' },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirige la raíz al dashboard
{ path: 'dashboard-cliente', component: DashboardClienteComponent }, // ruta para el dashboard
{ path: 'crear-plan', component: CrearPlanComponent }, // ruta para el dashboard
{ path: 'registro-user', component: RegistroUserComponent }, // ruta para el dashboard
{ path: 'agregar-ejercicios', component: CreateRoutineComponent },
{ path: 'agregar-alumno', component: AgregarAlumnoComponent }, // ruta para el dashboard
{ path: 'plan-entrenamiento', component: PlanEntrenamientoComponent }, // ruta para el dashboard
{ path: '**', redirectTo: '/dashboard-cliente' }, // wildcard al final para manejar rutas no coincidentes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
