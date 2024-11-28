import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './core/guard/auth.guard';
import { DashboardClienteComponent } from './components/dashboard-cliente/dashboard-cliente.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
//  { path: '', canActivate: [AuthGuard]},
//{ path: '**', redirectTo: '' },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirige la raíz al dashboard
{ path: 'dashboard-cliente', component: DashboardClienteComponent }, // ruta para el dashboard
{ path: '**', redirectTo: '/dashboard-cliente' }, // wildcard al final para manejar rutas no coincidentes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
