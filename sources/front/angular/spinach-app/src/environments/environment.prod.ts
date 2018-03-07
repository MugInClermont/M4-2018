const BASE_URI="http://spinach-srv2.northeurope.cloudapp.azure.com:63200/api";

export const environment = {
  production: true,
  api:{
    recipe:{
      all: `${BASE_URI}/recipes`,
      detail: `${BASE_URI}/recipes`,
    }
  }
};
