import { KeycloakService } from "keycloak-angular";

function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak
      .init({
        config: {
          url: 'http://localhost:8080/auth', //fonsi aca tenes que poner la url de tu keycloak
          realm: 'master', //fonsi aca tenes que poner el realm de tu keycloak
          clientId: 'dacs2023-bff', //fonsi aca tenes que poner el clientId de tu keycloak
        },
        initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: false,
        },
        bearerExcludedUrls: ['/assets'],
      })
      .then((authenticated) => {
        if (authenticated) {
          // Ensure user roles are an array
          const userRoles = keycloak.getUserRoles();
          if (!Array.isArray(userRoles)) {
            console.error('User roles are not an array:', userRoles);
            return false;
          }
          console.log('User roles:', userRoles);
        }
        return authenticated;
      })
      .catch((error) => {
        console.error('Keycloak initialization failed', error);
        return false;
      });
}
