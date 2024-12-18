export const environment = {
    production: false,
    keycloak: {
      url: 'http://localhost:8080',
      realm: 'master',
      clientId: 'dacs2023-bff'
    },
    backendForFrontendUrl: '/http://localhost:9001/bff', // Esta es la URL para la BFF
    databaseUrl: 'http://localhost:9003/backend' // Nueva propiedad para la API de la base de datos
  };
  