'use strict';


/**
 * Retrieve a collection of all document references to a topic.
 * Retrieve a collection of all document references to a topic.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidDocument_referencesGET = function(version,project_id,topic_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "guid" : "212ab37a-6122-448e-86fc-86503183b520",
  "url" : "http://example.com/files/LegalRequirements.pdf",
  "description" : "The legal requirements for buildings."
}, {
  "guid" : "6cbfe31d-95c3-4f4d-92a6-420c23698721",
  "document_guid" : "472ab37a-6122-448e-86fc-86503183b520",
  "description" : "The building owners global design parameters for buildings."
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a collection of all document references to a topic.
 * Retrieve a collection of all document references to a topic.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * document_reference_POST Document_reference_POST  (optional)
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidDocument_referencesPOST = function(version,project_id,topic_guid,document_reference_POST) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "guid" : "135ab37a-6122-448e-86fc-86503183b520",
  "url" : "http://example.com/files/LegalRequirements_Update.pdf",
  "description" : "The legal requirements for buildings."
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

