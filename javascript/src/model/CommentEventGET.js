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
import EventAction from './EventAction';





/**
* The CommentEventGET model module.
* @module model/CommentEventGET
* @version 1.0.0
*/
export default class CommentEventGET {
    /**
    * Constructs a new <code>CommentEventGET</code>.
    * @alias module:model/CommentEventGET
    * @class
    * @param commentGuid {String} 
    * @param topicGuid {String} 
    * @param _date {String} 
    * @param author {String} 
    * @param actions {Array.<module:model/EventAction>} 
    */

    constructor(commentGuid, topicGuid, _date, author, actions) {
        

        
        

        this['comment_guid'] = commentGuid;this['topic_guid'] = topicGuid;this['date'] = _date;this['author'] = author;this['actions'] = actions;

        
    }

    /**
    * Constructs a <code>CommentEventGET</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CommentEventGET} obj Optional instance to populate.
    * @return {module:model/CommentEventGET} The populated <code>CommentEventGET</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentEventGET();

            
            
            

            if (data.hasOwnProperty('comment_guid')) {
                obj['comment_guid'] = ApiClient.convertToType(data['comment_guid'], 'String');
            }
            if (data.hasOwnProperty('topic_guid')) {
                obj['topic_guid'] = ApiClient.convertToType(data['topic_guid'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], 'String');
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [EventAction]);
            }
        }
        return obj;
    }

    /**
    * @member {String} comment_guid
    */
    comment_guid = undefined;
    /**
    * @member {String} topic_guid
    */
    topic_guid = undefined;
    /**
    * @member {String} date
    */
    date = undefined;
    /**
    * @member {String} author
    */
    author = undefined;
    /**
    * @member {Array.<module:model/EventAction>} actions
    */
    actions = undefined;








}


