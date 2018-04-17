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
import Coloring from './Coloring';





/**
* The ColoringGET model module.
* @module model/ColoringGET
* @version 1.0.0
*/
export default class ColoringGET {
    /**
    * Constructs a new <code>ColoringGET</code>.
    * @alias module:model/ColoringGET
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ColoringGET</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ColoringGET} obj Optional instance to populate.
    * @return {module:model/ColoringGET} The populated <code>ColoringGET</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ColoringGET();

            
            
            

            if (data.hasOwnProperty('coloring')) {
                obj['coloring'] = ApiClient.convertToType(data['coloring'], [Coloring]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/Coloring>} coloring
    */
    coloring = undefined;








}


