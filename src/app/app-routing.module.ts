import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './core/guard/auth.guard';
import { DashboardClienteComponent } from './components/dashboard-cliente/dashboard-cliente.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PanelEntrenadorComponent } from './components/panel-entrenador/panel-entrenador.component';
import { CrearPlanComponent } from './components/crear-plan/crear-plan.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
const routes: Routes = [
//  { path: '', canActivate: [AuthGuard]},
//{ path: '**', redirectTo: '' },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirige la raíz al dashboard
{ path: 'dashboard-cliente', component: DashboardClienteComponent }, // ruta para el dashboard
{ path: 'panel-entrenador', component: PanelEntrenadorComponent }, // ruta para el dashboard
{ path: 'crear-plan', component: CrearPlanComponent }, // ruta para el dashboard
{ path: 'student-details', component: StudentDetailsComponent }, // ruta para el dashboard
{ path: '**', redirectTo: '/dashboard-cliente' }, // wildcard al final para manejar rutas no coincidentes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
