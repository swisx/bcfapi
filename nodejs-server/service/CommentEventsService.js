'use strict';


/**
 * RRetrieve a collection of comment events related to a project.
 * Retrieve a collection of comment events related to a project (default sort order is date).
 *
 * version String BFC Version
 * project_id String Project ID
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsCommentsEventsGET = function(version,project_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "comment_guid" : "C4215F4D-AC45-A43A-D615-AA456BEF832B",
  "topic_guid" : "A211FCC2-3A3B-EAA4-C321-DE22ABC8414",
  "date" : "2014-11-19T14:24:11.316Z",
  "author" : "Architect@example.com",
  "events" : [ {
    "type" : "comment_created",
    "value" : null
  } ]
}, {
  "comment_guid" : "C4215F4D-AC45-A43A-D615-AA456BEF832B",
  "topic_guid" : "A245F4F2-2C01-B43B-B612-5E456BEF8116",
  "date" : "2013-10-21T17:34:22.409Z",
  "author" : "Architect@example.com",
  "events" : [ {
    "type" : "viewpoint_updated",
    "value" : "b24a82e9-f67b-43b8-bda0-4946abf39624"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * RRetrieve a collection of comment events related to a project.
 * Retrieve a collection of comment events related to a project (default sort order is date).
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * comment_guid String Comment guid
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidEventsGET = function(version,project_id,topic_guid,comment_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "comment_guid" : "C4215F4D-AC45-A43A-D615-AA456BEF832B",
  "topic_guid" : "A211FCC2-3A3B-EAA4-C321-DE22ABC8414",
  "date" : "2014-11-19T14:24:11.316Z",
  "author" : "Architect@example.com",
  "events" : [ {
    "type" : "comment_created",
    "value" : null
  } ]
}, {
  "comment_guid" : "C4215F4D-AC45-A43A-D615-AA456BEF832B",
  "topic_guid" : "A245F4F2-2C01-B43B-B612-5E456BEF8116",
  "date" : "2013-10-21T17:34:22.409Z",
  "author" : "Architect@example.com",
  "events" : [ {
    "type" : "comment_text_updated",
    "value" : "This is the updated comment"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

