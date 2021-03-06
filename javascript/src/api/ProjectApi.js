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
import Body from '../model/Body';
import ProjectGET from '../model/ProjectGET';

/**
* Project service.
* @module api/ProjectApi
* @version 1.0.0
*/
export default class ProjectApi {

    /**
    * Constructs a new ProjectApi. 
    * @alias module:api/ProjectApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the bcfVersionProjectsGet operation.
     * @callback module:api/ProjectApi~bcfVersionProjectsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProjectGET>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Collection of projects
     * Retrieve a collection of projects where the currently logged on user has access to.
     * @param {module:model/String} version BFC Version
     * @param {module:api/ProjectApi~bcfVersionProjectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProjectGET>}
     */
    bcfVersionProjectsGet(version, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsGet");
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
      let returnType = [ProjectGET];

      return this.apiClient.callApi(
        '/bcf/{version}/projects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdExtensionsGet operation.
     * @callback module:api/ProjectApi~bcfVersionProjectsProjectIdExtensionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectGET} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a specific project.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {module:api/ProjectApi~bcfVersionProjectsProjectIdExtensionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectGET}
     */
    bcfVersionProjectsProjectIdExtensionsGet(version, projectId, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdExtensionsGet");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdExtensionsGet");
      }


      let pathParams = {
        'version': version,
        'project_id': projectId
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
      let returnType = ProjectGET;

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}/extensions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdGet operation.
     * @callback module:api/ProjectApi~bcfVersionProjectsProjectIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectGET} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a specific project.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {module:api/ProjectApi~bcfVersionProjectsProjectIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectGET}
     */
    bcfVersionProjectsProjectIdGet(version, projectId, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdGet");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdGet");
      }


      let pathParams = {
        'version': version,
        'project_id': projectId
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
      let returnType = ProjectGET;

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdPut operation.
     * @callback module:api/ProjectApi~bcfVersionProjectsProjectIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectGET} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Project Name
     * Modify a specific project. This operation is only possible when the server returns the update flag in the Project authorization,
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {Object} opts Optional parameters
     * @param {module:model/Body} opts.body Update name
     * @param {module:api/ProjectApi~bcfVersionProjectsProjectIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectGET}
     */
    bcfVersionProjectsProjectIdPut(version, projectId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdPut");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdPut");
      }


      let pathParams = {
        'version': version,
        'project_id': projectId
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
      let returnType = ProjectGET;

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
