/**
 * Get hourly usage for application security returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetUsageApplicationSecurityMonitoringRequest =
  {
    startHr: new Date(2021, 11, 11, 11, 11, 11, 111000),
  };

apiInstance
  .getUsageApplicationSecurityMonitoring(params)
  .then((data: v2.UsageApplicationSecurityMonitoringResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
