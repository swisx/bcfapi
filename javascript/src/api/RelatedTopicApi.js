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
import RelatedTopicGET from '../model/RelatedTopicGET';

/**
* RelatedTopic service.
* @module api/RelatedTopicApi
* @version 1.0.0
*/
export default class RelatedTopicApi {

    /**
    * Constructs a new RelatedTopicApi. 
    * @alias module:api/RelatedTopicApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet operation.
     * @callback module:api/RelatedTopicApi~bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RelatedTopicGET>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a collection of all related topics to a topic.
     * Retrieve a collection of all related topics to a topic.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {String} topicGuid Topic guid
     * @param {module:api/RelatedTopicApi~bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RelatedTopicGET>}
     */
    bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet(version, projectId, topicGuid, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet");
      }

      // verify the required parameter 'topicGuid' is set
      if (topicGuid === undefined || topicGuid === null) {
        throw new Error("Missing the required parameter 'topicGuid' when calling bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet");
      }


      let pathParams = {
        'version': version,
        'project_id': projectId,
        'topic_guid': topicGuid
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
      let returnType = [RelatedTopicGET];

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}/topics/{topic_guid}/related_topics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut operation.
     * @callback module:api/RelatedTopicApi~bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPutCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RelatedTopicGET>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add or update a collection of all related topics to a topic.
     * Add or update a collection of all related topics to a topic. This operation is only possible when the server returns the updateRelatedTopics flag in the Topic authorization.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {String} topicGuid Topic guid
     * @param {Object} opts Optional parameters
     * @param {module:model/RelatedTopicGET} opts.relatedTopicPUT 
     * @param {module:api/RelatedTopicApi~bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RelatedTopicGET>}
     */
    bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut(version, projectId, topicGuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['relatedTopicPUT'];

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut");
      }

      // verify the required parameter 'topicGuid' is set
      if (topicGuid === undefined || topicGuid === null) {
        throw new Error("Missing the required parameter 'topicGuid' when calling bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut");
      }


      let pathParams = {
        'version': version,
        'project_id': projectId,
        'topic_guid': topicGuid
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
      let returnType = [RelatedTopicGET];

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}/topics/{topic_guid}/related_topics', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
