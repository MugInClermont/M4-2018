// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const BASE_URI="http://spinach-srv2.northeurope.cloudapp.azure.com:63200/api";

export const environment = {
  production: false,
  api:{
    recipe:{
      all: `${BASE_URI}/recipes`,
      detail: `${BASE_URI}/recipes`,
    }
  }
};
