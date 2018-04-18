'use strict';


/**
 * Retrieve a collection of topic events related to a project.
 * Retrieve a collection of topic events related to a project (default sort order is date).
 *
 * version String BFC Version
 * project_id String Project ID
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsEventsGET = function(version,project_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "topic_guid" : "A211FCC2-3A3B-EAA4-C321-DE22ABC8414",
  "date" : "2014-11-19T14:24:11.316Z",
  "author" : "Architect@example.com",
  "events" : [ {
    "type" : "status_updated",
    "value" : "Closed"
  } ]
}, {
  "topic_guid" : "A245F4F2-2C01-B43B-B612-5E456BEF8116",
  "date" : "2013-10-21T17:34:22.409Z",
  "author" : "Architect@example.com",
  "events" : [ {
    "type" : "type_updated",
    "value" : "Warning"
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
 * Retrieve a collection of topic events related to a project.
 * Retrieve a collection of topic events related to a project (default sort order is date).
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidEventsGET = function(version,project_id,topic_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "topic_guid" : "A245F4F2-2C01-B43B-B612-5E456BEF8116",
  "date" : "2014-11-19T14:24:11.316Z",
  "author" : "Architect@example.com",
  "events" : [ {
    "type" : "type_updated",
    "value" : "Error"
  } ]
}, {
  "topic_guid" : "A245F4F2-2C01-B43B-B612-5E456BEF8116",
  "date" : "2013-10-21T17:34:22.409Z",
  "author" : "Architect@example.com",
  "events" : [ {
    "type" : "status_updated",
    "value" : "Open"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

