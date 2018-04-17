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
* The DocumentGET model module.
* @module model/DocumentGET
* @version 1.0.0
*/
export default class DocumentGET {
    /**
    * Constructs a new <code>DocumentGET</code>.
    * @alias module:model/DocumentGET
    * @class
    * @param guid {String} 
    * @param filename {String} 
    */

    constructor(guid, filename) {
        

        
        

        this['guid'] = guid;this['filename'] = filename;

        
    }

    /**
    * Constructs a <code>DocumentGET</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/DocumentGET} obj Optional instance to populate.
    * @return {module:model/DocumentGET} The populated <code>DocumentGET</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentGET();

            
            
            

            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} guid
    */
    guid = undefined;
    /**
    * @member {String} filename
    */
    filename = undefined;








}

