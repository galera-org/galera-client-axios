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
 * @interface AlbumResponse
 */
export interface AlbumResponse {
  /**
   *
   * @type {string}
   * @memberof AlbumResponse
   */
  created_at: string;
  /**
   *
   * @type {string}
   * @memberof AlbumResponse
   */
  description?: string | null;
  /**
   *
   * @type {string}
   * @memberof AlbumResponse
   */
  link: string;
  /**
   *
   * @type {string}
   * @memberof AlbumResponse
   */
  name: string;
  /**
   *
   * @type {number}
   * @memberof AlbumResponse
   */
  owner_id: number;
  /**
   *
   * @type {string}
   * @memberof AlbumResponse
   */
  thumbnail_link?: string | null;
}
