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
import ComponentList from './ComponentList';
import ViewSetupHints from './ViewSetupHints';





/**
* The Visibility model module.
* @module model/Visibility
* @version 1.0.0
*/
export default class Visibility {
    /**
    * Constructs a new <code>Visibility</code>.
    * @alias module:model/Visibility
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Visibility</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Visibility} obj Optional instance to populate.
    * @return {module:model/Visibility} The populated <code>Visibility</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Visibility();

            
            
            

            if (data.hasOwnProperty('default_visibility')) {
                obj['default_visibility'] = ApiClient.convertToType(data['default_visibility'], 'Boolean');
            }
            if (data.hasOwnProperty('exceptions')) {
                obj['exceptions'] = ComponentList.constructFromObject(data['exceptions']);
            }
            if (data.hasOwnProperty('view_setup_hints')) {
                obj['view_setup_hints'] = ViewSetupHints.constructFromObject(data['view_setup_hints']);
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} default_visibility
    * @default false
    */
    default_visibility = false;
    /**
    * @member {module:model/ComponentList} exceptions
    */
    exceptions = undefined;
    /**
    * @member {module:model/ViewSetupHints} view_setup_hints
    */
    view_setup_hints = undefined;








}

