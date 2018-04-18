'use strict';


/**
 * Retrieve a collection of topics related to a project
 * Retrieve a collection of topics related to a project (default sort order is creation_date).
 *
 * version String BFC Version
 * project_id String Project ID
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsGET = function(version,project_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "guid" : "A245F4F2-2C01-B43B-B612-5E456BEF8116",
  "creation_author" : "Architect@example.com",
  "title" : "Example topic 1",
  "labels" : [ "Architecture", "Structural" ],
  "creation_date" : "2013-10-21T17:34:22.409Z"
}, {
  "guid" : "A211FCC2-3A3B-EAA4-C321-DE22ABC8414",
  "creation_author" : "Architect@example.com",
  "title" : "Example topic 2",
  "labels" : [ "Architecture", "Heating", "Electrical" ],
  "creation_date" : "2014-11-19T14:24:11.316Z"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new topic.
 * Add a new topic. This operation is only possible when the server returns the createTopic flag in the Project authorization.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_POST Topic_POST  (optional)
 * returns topic_GET
 **/
exports.bcfVersionProjectsProject_idTopicsPOST = function(version,project_id,topic_POST) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "guid" : "A245F4F2-2C01-B43B-B612-5E456BEF8116",
  "creation_author" : "Architect@example.com",
  "creation_date" : "2016-08-01T17:34:22.409Z",
  "topic_type" : "Clash",
  "topic_status" : "open",
  "title" : "Example topic 3",
  "priority" : "high",
  "labels" : [ "Architecture", "Heating" ],
  "assigned_to" : "harry.muster@example.com",
  "bim_snippet" : {
    "snippet_type" : "clash",
    "is_external" : true,
    "reference" : "https://example.com/bcf/1.0/ADFE23AA11BCFF444122BB",
    "reference_schema" : "https://example.com/bcf/1.0/clash.xsd"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a single topic.
 * Deletes a single topic. This operation is only possible when the server returns the delete flag in the Topic authorization.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * no response value expected for this operation
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidDELETE = function(version,project_id,topic_guid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a specific topic.
 * Retrieve a specific topic.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * returns topic_GET
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidGET = function(version,project_id,topic_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "guid" : "B345F4F2-3A04-B43B-A713-5E456BEF8228",
  "creation_author" : "Architect@example.com",
  "creation_date" : "2016-08-01T17:34:22.409Z",
  "topic_type" : "Clash",
  "topic_status" : "open",
  "title" : "Example topic 3",
  "priority" : "high",
  "labels" : [ "Architecture", "Heating" ],
  "assigned_to" : "harry.muster@example.com",
  "bim_snippet" : {
    "snippet_type" : "clash",
    "is_external" : true,
    "reference" : "https://example.com/bcf/1.0/ADFE23AA11BCFF444122BB",
    "reference_schema" : "https://example.com/bcf/1.0/clash.xsd"
  },
  "authorization" : {
    "topic_actions" : [ "createComment", "createViewpoint" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify a specific topic
 * Modify a specific topic, description similar to POST. This operation is only possible when the server returns the update flag in the Topic authorization
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * topic_PUT Topic_PUT  (optional)
 * returns topic_GET
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidPUT = function(version,project_id,topic_guid,topic_PUT) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = null;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a topics BIM-Snippet as binary file.
 * Retrieves a topics BIM-Snippet as binary file.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * returns bim_snippet
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidSnippetGET = function(version,project_id,topic_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bim_snippet" : {
    "snippet_type" : "clash",
    "is_external" : true,
    "reference" : "https://example.com/bcf/1.0/ADFE23AA11BCFF444122BB",
    "reference_schema" : "https://example.com/bcf/1.0/clash.xsd"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Puts a new BIM Snippet binary file to a topic
 * Puts a new BIM Snippet binary file to a topic. If this is used, the parent topics BIM Snippet property is_external must be set to false and the reference must be the file name with extension. This operation is only possible when the server returns the updateBimSnippet flag in the Topic authorization. THERE IS NO BODY EXAMPLE!
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * no response value expected for this operation
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidSnippetPUT = function(version,project_id,topic_guid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

