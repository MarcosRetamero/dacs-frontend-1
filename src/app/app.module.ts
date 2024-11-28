import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './core/init/keycloak-init.factory';
import { ApiService } from './core/services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardClienteComponent } from './components/dashboard-cliente/dashboard-cliente.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardClienteComponent,
    LayoutComponent

  ],
  imports: [
    BrowserModule,
  //  KeycloakAngularModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    //{
    //  provide: APP_INITIALIZER,
    //  useFactory: initializeKeycloak,
    //  multi: true,
    //  deps: [KeycloakService],
    //},
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
