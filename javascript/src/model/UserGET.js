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
* The UserGET model module.
* @module model/UserGET
* @version 1.0.0
*/
export default class UserGET {
    /**
    * Constructs a new <code>UserGET</code>.
    * @alias module:model/UserGET
    * @class
    * @param id {String} 
    */

    constructor(id) {
        

        
        

        this['id'] = id;

        
    }

    /**
    * Constructs a <code>UserGET</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserGET} obj Optional instance to populate.
    * @return {module:model/UserGET} The populated <code>UserGET</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGET();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;








}


