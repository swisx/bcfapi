/**
 * BCFAPI
 * A BCF API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AuthGET from '../model/AuthGET';
import UserGET from '../model/UserGET';
import VersionsGET from '../model/VersionsGET';

/**
* Public service.
* @module api/PublicApi
* @version 1.0.0
*/
export default class PublicApi {

    /**
    * Constructs a new PublicApi. 
    * @alias module:api/PublicApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the bcfVersionAuthGet operation.
     * @callback module:api/PublicApi~bcfVersionAuthGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AuthGET>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtaining Authentication Information
     * @param {module:model/String} version BFC Version
     * @param {module:api/PublicApi~bcfVersionAuthGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AuthGET>}
     */
    bcfVersionAuthGet(version, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionAuthGet");
      }


      let pathParams = {
        'version': version
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [AuthGET];

      return this.apiClient.callApi(
        '/bcf/{version}/auth', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionCurrentUserGet operation.
     * @callback module:api/PublicApi~bcfVersionCurrentUserGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGET} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current user
     * Get current user
     * @param {module:model/String} version BFC Version
     * @param {module:api/PublicApi~bcfVersionCurrentUserGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGET}
     */
    bcfVersionCurrentUserGet(version, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionCurrentUserGet");
      }


      let pathParams = {
        'version': version
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserGET;

      return this.apiClient.callApi(
        '/bcf/{version}/current-user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionsGet operation.
     * @callback module:api/PublicApi~bcfVersionsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VersionsGET>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of versions
     * Returns a list of all supported BCF API versions of the server.
     * @param {module:api/PublicApi~bcfVersionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/VersionsGET>}
     */
    bcfVersionsGet(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [VersionsGET];

      return this.apiClient.callApi(
        '/bcf/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}