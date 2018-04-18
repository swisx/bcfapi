'use strict';


/**
 * Deletes a single comment.
 * Deletes a single comment. This operation is only possible when the server returns the delete flag in the Comment authorization.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * comment_guid String Comment guid
 * no response value expected for this operation
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidDELETE = function(version,project_id,topic_guid,comment_guid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a collection of all comments related to a topic
 * Retrieve a collection of all comments related to a topic (default ordering is date).
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * comment_guid String Comment guid
 * returns comment_GET
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidGET = function(version,project_id,topic_guid,comment_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "guid" : "A333FCA8-1A31-CAAC-A321-BB33ABC8414",
  "date" : "2016-08-01T14:24:11.316Z",
  "author" : "bob.heater@example.com",
  "comment" : "will rework the heating model",
  "topic_guid" : "B345F4F2-3A04-B43B-A713-5E456BEF8228"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a single comment
 * Update a single comment, description similar to POST. This operation is only possible when the server returns the update flag in the Comment authorization.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * comment_guid String Comment guid
 * comment_PUT Comment_PUT  (optional)
 * returns comment_GET
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidPUT = function(version,project_id,topic_guid,comment_guid,comment_PUT) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "guid" : "A333FCA8-1A31-CAAC-A321-BB33ABC8414",
  "date" : "2016-08-01T14:24:11.316Z",
  "author" : "bob.heater@example.com",
  "modified_date" : "2016-08-01T19:24:11.316Z",
  "modified_author" : "bob.heater@example.com",
  "comment" : "will rework the heating model and fix the ventilation",
  "topic_guid" : "B345F4F2-3A04-B43B-A713-5E456BEF8228"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a collection of all comments related to a topic
 * Retrieve a collection of all comments related to a topic (default ordering is date).
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidCommentsGET = function(version,project_id,topic_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "guid" : "C4215F4D-AC45-A43A-D615-AA456BEF832B",
  "date" : "2016-08-01T12:34:22.409Z",
  "author" : "max.muster@example.com",
  "comment" : "Clash found",
  "topic_guid" : "B345F4F2-3A04-B43B-A713-5E456BEF8228",
  "authorization" : {
    "comment_actions" : [ "update" ]
  }
}, {
  "guid" : "A333FCA8-1A31-CAAC-A321-BB33ABC8414",
  "date" : "2016-08-01T14:24:11.316Z",
  "author" : "bob.heater@example.com",
  "comment" : "will rework the heating model",
  "topic_guid" : "B345F4F2-3A04-B43B-A713-5E456BEF8228"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new comment to a topic.
 * Add a new comment to a topic. This operation is only possible when the server returns the createComment flag in the Topic authorization.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * comment_POST Comment_POST  (optional)
 * returns comment_GET
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidCommentsPOST = function(version,project_id,topic_guid,comment_POST) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

