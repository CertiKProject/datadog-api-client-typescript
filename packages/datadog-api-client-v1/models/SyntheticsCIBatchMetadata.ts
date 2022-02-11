/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsCIBatchMetadataCI } from "./SyntheticsCIBatchMetadataCI";
import { SyntheticsCIBatchMetadataGit } from "./SyntheticsCIBatchMetadataGit";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Metadata for the Synthetics tests run.
 */

export class SyntheticsCIBatchMetadata {
  "ci"?: SyntheticsCIBatchMetadataCI;
  "git"?: SyntheticsCIBatchMetadataGit;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ci: {
      baseName: "ci",
      type: "SyntheticsCIBatchMetadataCI",
    },
    git: {
      baseName: "git",
      type: "SyntheticsCIBatchMetadataGit",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsCIBatchMetadata.attributeTypeMap;
  }

  public constructor() {}
}
