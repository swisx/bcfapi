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
import ColoringGET from '../model/ColoringGET';
import SelectionGET from '../model/SelectionGET';
import ViewpointGET from '../model/ViewpointGET';
import ViewpointPOST from '../model/ViewpointPOST';
import VisibilityGET from '../model/VisibilityGET';

/**
* Viewpoint service.
* @module api/ViewpointApi
* @version 1.0.0
*/
export default class ViewpointApi {

    /**
    * Constructs a new ViewpointApi. 
    * @alias module:api/ViewpointApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet operation.
     * @callback module:api/ViewpointApi~bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a specific viewpoints bitmap image file (png or jpg).
     * Retrieve a specific viewpoints bitmap image file (png or jpg).
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {String} guid Bitmap guid
     * @param {module:api/ViewpointApi~bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet(version, projectId, guid, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet");
      }

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet");
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
      let returnType = null;

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{guid}/topics/{guid}/viewpoints/{guid}/bitmaps/{guid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet operation.
     * @callback module:api/ViewpointApi~bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a viewpoints snapshot (png or jpg) as image file.
     * Retrieve a viewpoints snapshot (png or jpg) as image file.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {String} guid Viewpoint guid
     * @param {module:api/ViewpointApi~bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet(version, projectId, guid, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet");
      }

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet");
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
      let returnType = null;

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{guid}/topics/{guid}/viewpoints/{guid}/snapshot', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdTopicsGuidViewpointsGet operation.
     * @callback module:api/ViewpointApi~bcfVersionProjectsProjectIdTopicsGuidViewpointsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ViewpointGET>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a collection of all viewpoints related to a topic.
     * Retrieve a collection of all viewpoints related to a topic.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {String} guid Topic guid
     * @param {module:api/ViewpointApi~bcfVersionProjectsProjectIdTopicsGuidViewpointsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ViewpointGET>}
     */
    bcfVersionProjectsProjectIdTopicsGuidViewpointsGet(version, projectId, guid, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGet");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGet");
      }

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGet");
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
      let returnType = [ViewpointGET];

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet operation.
     * @callback module:api/ViewpointApi~bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ColoringGET>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a collection of all colored components in a viewpoint.
     * Retrieve a collection of all colored components in a viewpoint.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {String} guid Viewpoint guid
     * @param {module:api/ViewpointApi~bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ColoringGET>}
     */
    bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet(version, projectId, guid, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet");
      }

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet");
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
      let returnType = [ColoringGET];

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid}/coloring', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet operation.
     * @callback module:api/ViewpointApi~bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ViewpointGET>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a collection of all viewpoints related to a topic.
     * Retrieve a collection of all viewpoints related to a topic.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {String} guid Viewpoint guid
     * @param {module:api/ViewpointApi~bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ViewpointGET>}
     */
    bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet(version, projectId, guid, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet");
      }

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet");
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
      let returnType = [ViewpointGET];

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet operation.
     * @callback module:api/ViewpointApi~bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SelectionGET>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a collection of all selected components in a viewpoint.
     * Retrieve a collection of all selected components in a viewpoint.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {String} guid Viewpoint guid
     * @param {module:api/ViewpointApi~bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SelectionGET>}
     */
    bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet(version, projectId, guid, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet");
      }

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet");
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
      let returnType = [SelectionGET];

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid}/selection', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet operation.
     * @callback module:api/ViewpointApi~bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VisibilityGET>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve visibility of components in a viewpoint.
     * Retrieve visibility of components in a viewpoint.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {String} guid Viewpoint guid
     * @param {module:api/ViewpointApi~bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/VisibilityGET>}
     */
    bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet(version, projectId, guid, callback) {
      let postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet");
      }

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet");
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
      let returnType = [VisibilityGET];

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid}/visibility', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bcfVersionProjectsProjectIdTopicsGuidViewpointsPost operation.
     * @callback module:api/ViewpointApi~bcfVersionProjectsProjectIdTopicsGuidViewpointsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewpointGET} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new viewpoint.
     * Add a new viewpoint. Viewpoints are immutable, meaning that they should never change. Requirements for different visualizations should be handled by creating new viewpoint elements. This operation is only possible when the server returns the createViewpoint flag in the Topic authorization.
     * @param {module:model/String} version BFC Version
     * @param {String} projectId Project ID
     * @param {String} guid Topic guid
     * @param {Object} opts Optional parameters
     * @param {module:model/ViewpointPOST} opts.viewpointPOST 
     * @param {module:api/ViewpointApi~bcfVersionProjectsProjectIdTopicsGuidViewpointsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewpointGET}
     */
    bcfVersionProjectsProjectIdTopicsGuidViewpointsPost(version, projectId, guid, opts, callback) {
      opts = opts || {};
      let postBody = opts['viewpointPOST'];

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsPost");
      }

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsPost");
      }

      // verify the required parameter 'guid' is set
      if (guid === undefined || guid === null) {
        throw new Error("Missing the required parameter 'guid' when calling bcfVersionProjectsProjectIdTopicsGuidViewpointsPost");
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
      let returnType = ViewpointGET;

      return this.apiClient.callApi(
        '/bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}