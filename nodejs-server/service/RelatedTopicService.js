'use strict';


/**
 * Retrieve a collection of all related topics to a topic.
 * Retrieve a collection of all related topics to a topic.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidRelated_topicsGET = function(version,project_id,topic_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "related_topic_guid" : "db49df2b-0e42-473b-a3ee-f7b785d783c4"
}, {
  "related_topic_guid" : "6963a846-54d1-4050-954d-607cd5e48aa3"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add or update a collection of all related topics to a topic.
 * Add or update a collection of all related topics to a topic. This operation is only possible when the server returns the updateRelatedTopics flag in the Topic authorization.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * related_topic_PUT Related_topic_GET  (optional)
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidRelated_topicsPUT = function(version,project_id,topic_guid,related_topic_PUT) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "related_topic_guid" : "db49df2b-0e42-473b-a3ee-f7b785d783c4"
}, {
  "related_topic_guid" : "6963a846-54d1-4050-954d-607cd5e48aa3"
}, {
  "related_topic_guid" : "bac66ab4-331e-4f21-a28e-083d2cf2e796"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

