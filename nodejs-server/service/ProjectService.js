'use strict';


/**
 * Collection of projects
 * Retrieve a collection of projects where the currently logged on user has access to.
 *
 * version String BFC Version
 * returns List
 **/
exports.bcfVersionProjectsGET = function(version) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "project_id" : "F445F4F2-4D02-4B2A-B612-5E456BEF9137",
  "name" : "Example project 1",
  "authorization" : {
    "project_actions" : [ "createTopic", "createDocument" ]
  }
}, {
  "project_id" : "A233FBB2-3A3B-EFF4-C123-DE22ABC8414",
  "name" : "Example project 2",
  "authorization" : {
    "project_actions" : [ ]
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a specific project.
 *
 * version String BFC Version
 * project_id String Project ID
 * returns project_GET
 **/
exports.bcfVersionProjectsProject_idExtensionsGET = function(version,project_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "topic_type" : [ "Information", "Error" ],
  "topic_status" : [ "Open", "Closed", "ReOpened" ],
  "topic_label" : [ "Architecture", "Structural", "MEP" ],
  "snippet_type" : [ ".ifc", ".csv" ],
  "priority" : [ "Low", "Medium", "High" ],
  "user_id_type" : [ "Architect@example.com", "BIM-Manager@example.com", "bob_heater@example.com" ],
  "stage" : [ "Preliminary Planning End", "Construction Start", "Construction End" ],
  "project_actions" : [ "update", "createTopic", "createDocument", "updateProjectExtensions" ],
  "topic_actions" : [ "update", "updateBimSnippet", "updateRelatedTopics", "updateDocumentReferences", "updateFiles", "createComment", "createViewpoint" ],
  "comment_actions" : [ "update" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a specific project.
 *
 * version String BFC Version
 * project_id String Project ID
 * returns project_GET
 **/
exports.bcfVersionProjectsProject_idGET = function(version,project_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "project_id" : "B724AAC3-5B2A-234A-D143-AE33CC18414",
  "name" : "Example project 3",
  "authorization" : {
    "project_actions" : [ "update", "updateProjectExtensions" ]
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
 * Update Project Name
 * Modify a specific project. This operation is only possible when the server returns the update flag in the Project authorization,
 *
 * version String BFC Version
 * project_id String Project ID
 * body Body Update name (optional)
 * returns project_GET
 **/
exports.bcfVersionProjectsProject_idPUT = function(version,project_id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "project_id" : "B724AAC3-5B2A-234A-D143-AE33CC18414",
  "name" : "Example project 3",
  "authorization" : {
    "project_actions" : [ "update", "updateProjectExtensions" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

