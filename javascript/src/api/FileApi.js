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
import FileGET from '../model/FileGET';
import FilePUT from '../model/FilePUT';

/**
* File service.
* @module api/FileApi
* @version 1.0.0
*/
export default class FileApi {

    /**
    * Constructs a new FileApi. 
    * @alias module:api/FileApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdTopicsGuidFilesGet operation.
     * @callback module:api/FileApi~bcfVersionProjectsProjectIdTopicsGuidFilesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FileGET>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a collection of file references as topic header.
     * Retrieve a collection of file references as topic header.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {String} guid Topic guid
     * @param {module:api/FileApi~bcfVersionProjectsProjectIdTopicsGuidFilesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FileGET>}
     */
    bcfVersionProjectsProjectIdTopicsGuidFilesGet(version, projectId, guid, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdTopicsGuidFilesGet");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdTopicsGuidFilesGet");
      }

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling bcfVersionProjectsProjectIdTopicsGuidFilesGet");
      }


      let pathParams = {
        'version': version,
        'project_id': projectId,
        'guid': guid
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
      let returnType = [FileGET];

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}/topics/{guid}/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdTopicsGuidFilesPut operation.
     * @callback module:api/FileApi~bcfVersionProjectsProjectIdTopicsGuidFilesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FileGET} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a collection of file references on the topic header.
     * Update a collection of file references on the topic header. This operation is only possible when the server returns the updateFiles flag in the Topic authorization.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {String} guid Topic guid
     * @param {Object} opts Optional parameters
     * @param {module:model/FilePUT} opts.filePUT 
     * @param {module:api/FileApi~bcfVersionProjectsProjectIdTopicsGuidFilesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FileGET}
     */
    bcfVersionProjectsProjectIdTopicsGuidFilesPut(version, projectId, guid, opts, callback) {
      opts = opts || {};
      let postBody = opts['filePUT'];

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdTopicsGuidFilesPut");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdTopicsGuidFilesPut");
      }

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling bcfVersionProjectsProjectIdTopicsGuidFilesPut");
      }


      let pathParams = {
        'version': version,
        'project_id': projectId,
        'guid': guid
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
      let returnType = FileGET;

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}/topics/{guid}/files', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}