import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private keycloakService: KeycloakService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const keycloakInstance = this.keycloakService.getKeycloakInstance();
    const token = keycloakInstance.token;

    // Fix property access syntax
    console.log('Token obtenido desde Keycloak:', token);
    console.log('Información del usuario:', keycloakInstance.idTokenParsed);
    console.log('Usuario autenticado:', keycloakInstance.idTokenParsed?.['preferred_username']);
    console.log('Email del usuario:', keycloakInstance.idTokenParsed?.['email']);

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: 'Bearer ${token}'
        }
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
