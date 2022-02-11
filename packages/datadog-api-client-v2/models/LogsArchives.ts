/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsArchiveDefinition } from "./LogsArchiveDefinition";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The available archives.
 */

export class LogsArchives {
  /**
   * A list of archives.
   */
  "data"?: Array<LogsArchiveDefinition>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<LogsArchiveDefinition>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsArchives.attributeTypeMap;
  }

  public constructor() {}
}
