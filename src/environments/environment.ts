export const environment = {
    production: false,
    keycloak: {
      url: 'http://localhost:8080',
      realm: 'dacs',
      clientId: 'dacs-fe'
    },
    backendForFrontendUrl: '/api', // Esta es la URL para la BFF
    databaseUrl: 'http://localhost:3000/api' // Nueva propiedad para la API de la base de datos
  };
  