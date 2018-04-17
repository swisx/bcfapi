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
import Component from './Component';





/**
* The ComponentList model module.
* @module model/ComponentList
* @version 1.0.0
*/
export default class ComponentList extends Array {
    /**
    * Constructs a new <code>ComponentList</code>.
    * @alias module:model/ComponentList
    * @class
    * @extends Array
    */

    constructor() {
        
        super();
        

        
        

        

        return this;
    }

    /**
    * Constructs a <code>ComponentList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ComponentList} obj Optional instance to populate.
    * @return {module:model/ComponentList} The populated <code>ComponentList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComponentList();

            ApiClient.constructFromObject(data, obj, 'Component');

            
            

        }
        return obj;
    }









}

