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
* The Component model module.
* @module model/Component
* @version 1.0.0
*/
export default class Component {
    /**
    * Constructs a new <code>Component</code>.
    * @alias module:model/Component
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Component</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Component} obj Optional instance to populate.
    * @return {module:model/Component} The populated <code>Component</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Component();

            
            
            

            if (data.hasOwnProperty('ifc_guid')) {
                obj['ifc_guid'] = ApiClient.convertToType(data['ifc_guid'], 'String');
            }
            if (data.hasOwnProperty('originating_system')) {
                obj['originating_system'] = ApiClient.convertToType(data['originating_system'], 'String');
            }
            if (data.hasOwnProperty('authoring_tool_id')) {
                obj['authoring_tool_id'] = ApiClient.convertToType(data['authoring_tool_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} ifc_guid
    */
    ifc_guid = undefined;
    /**
    * @member {String} originating_system
    */
    originating_system = undefined;
    /**
    * @member {String} authoring_tool_id
    */
    authoring_tool_id = undefined;








}


