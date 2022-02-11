import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiCreateCurrentUserApplicationKeyRequest = {
  // ApplicationKeyCreateRequest
  body: {
    data: {
      attributes: {
        name: "Application Key for managing dashboards",
        scopes: ["dashboards_read","dashboards_write","dashboards_public_share"],
      },
      type: "application_keys",
    },
  },
};

apiInstance.createCurrentUserApplicationKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
