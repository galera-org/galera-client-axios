/* tslint:disable */
/* eslint-disable */
/**
 * galera
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface MediaResponse
 */
export interface MediaResponse {
  /**
   *
   * @type {string}
   * @memberof MediaResponse
   */
  date_taken: string;
  /**
   *
   * @type {string}
   * @memberof MediaResponse
   */
  description?: string | null;
  /**
   *
   * @type {string}
   * @memberof MediaResponse
   */
  filename: string;
  /**
   *
   * @type {number}
   * @memberof MediaResponse
   */
  height: number;
  /**
   *
   * @type {number}
   * @memberof MediaResponse
   */
  owner_id: number;
  /**
   *
   * @type {string}
   * @memberof MediaResponse
   */
  uuid: string;
  /**
   *
   * @type {number}
   * @memberof MediaResponse
   */
  width: number;
}
