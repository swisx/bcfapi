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
import ProjectGETAuthorization from './ProjectGETAuthorization';





/**
* The ProjectGET model module.
* @module model/ProjectGET
* @version 1.0.0
*/
export default class ProjectGET {
    /**
    * Constructs a new <code>ProjectGET</code>.
    * @alias module:model/ProjectGET
    * @class
    * @param projectId {String} 
    * @param name {String} 
    */

    constructor(projectId, name) {
        

        
        

        this['project_id'] = projectId;this['name'] = name;

        
    }

    /**
    * Constructs a <code>ProjectGET</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProjectGET} obj Optional instance to populate.
    * @return {module:model/ProjectGET} The populated <code>ProjectGET</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectGET();

            
            
            

            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('authorization')) {
                obj['authorization'] = ProjectGETAuthorization.constructFromObject(data['authorization']);
            }
        }
        return obj;
    }

    /**
    * @member {String} project_id
    */
    project_id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {module:model/ProjectGETAuthorization} authorization
    */
    authorization = undefined;








}


