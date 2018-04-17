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


import ApiClient from '../ApiClient';





/**
* The VersionsGETVersions model module.
* @module model/VersionsGETVersions
* @version 1.0.0
*/
export default class VersionsGETVersions {
    /**
    * Constructs a new <code>VersionsGETVersions</code>.
    * @alias module:model/VersionsGETVersions
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>VersionsGETVersions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VersionsGETVersions} obj Optional instance to populate.
    * @return {module:model/VersionsGETVersions} The populated <code>VersionsGETVersions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionsGETVersions();

            
            
            

            if (data.hasOwnProperty('version_id')) {
                obj['version_id'] = ApiClient.convertToType(data['version_id'], 'String');
            }
            if (data.hasOwnProperty('detailed_version')) {
                obj['detailed_version'] = ApiClient.convertToType(data['detailed_version'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} version_id
    */
    version_id = undefined;
    /**
    * @member {String} detailed_version
    */
    detailed_version = undefined;








}


