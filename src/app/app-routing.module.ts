import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { DashboardClienteComponent } from './components/dashboard-cliente/dashboard-cliente.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PanelEntrenadorComponent } from './components/panel-entrenador/panel-entrenador.component';
import { CrearPlanComponent } from './components/crear-plan/crear-plan.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { RegistroUserComponent } from './components/registro-user/registro-user.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { PlanEntrenamientoComponent } from './components/plan-entrenamiento/plan-entrenamiento.component';
import { RegistroEntrenadorComponent } from './components/registro-entrenador/registro-entrenador.component';
import { TestBffComponent } from './components/testbff/testbff.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard-cliente', pathMatch: 'full' },
  { 
    path: 'dashboard-cliente', 
    component: DashboardClienteComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'panel-entrenador', 
    component: PanelEntrenadorComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'crear-plan', 
    component: CrearPlanComponent,
    canActivate: [AuthGuard]
  },
  { path: 'student-details', component: StudentDetailsComponent },
  { path: 'registro-user', component: RegistroUserComponent },
  { path: 'registro-entrenador', component: RegistroEntrenadorComponent },
  { path: 'plan-entrenamiento', component: PlanEntrenamientoComponent },
  { path: 'plan-entrenamiento/:day', component: PlanEntrenamientoComponent },
  { path: 'testbff', component: TestBffComponent },
  { path: '**', redirectTo: '/dashboard-cliente' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
