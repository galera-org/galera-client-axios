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

import { UserInfo } from "./user-info";

/**
 * Response when logging in.
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse {
  /**
   *
   * @type {string}
   * @memberof LoginResponse
   */
  bearer_token: string;
  /**
   *
   * @type {UserInfo}
   * @memberof LoginResponse
   */
  user_info: UserInfo;
}
