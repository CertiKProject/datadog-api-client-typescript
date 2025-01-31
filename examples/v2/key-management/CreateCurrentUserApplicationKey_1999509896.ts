/**
 * Create an Application key for current user returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

const params: v2.KeyManagementApiCreateCurrentUserApplicationKeyRequest = {
  body: {
    data: {
      type: "application_keys",
      attributes: {
        name: "Example-Create_an_Application_key_for_current_user_returns_Created_response",
      },
    },
  },
};

apiInstance
  .createCurrentUserApplicationKey(params)
  .then((data: v2.ApplicationKeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
