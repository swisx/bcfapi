'use strict';


/**
 * Retrieves a document as binary file.
 * Retrieves a document as binary file.
 *
 * version String BFC Version
 * project_id String Project ID
 * document_guid String Document guid
 * returns document_GET
 **/
exports.bcfVersionProjectsProject_idDocumentsDocument_guidGET = function(version,project_id,document_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "filename" : "filename",
  "guid" : "guid"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a collection of all documents uploaded to a project.
 * Retrieve a collection of all documents uploaded to a project.
 *
 * version String BFC Version
 * project_id String Project ID
 * returns List
 **/
exports.bcfVersionProjectsProject_idDocumentsGET = function(version,project_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "guid" : "472ab37a-6122-448e-86fc-86503183b520",
  "filename" : "LegalRequirements.pdf"
}, {
  "guid" : "6cbfe31d-95c3-4f4d-92a6-420c23698721",
  "filename" : "DesignParameters.pdf"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Upload a document (binary file) to a project.
 * Upload a document (binary file) to a project. This operation is only possible when the server returns the createDocument flag in the Project authorization.
 *
 * version String BFC Version
 * project_id String Project ID
 * returns List
 **/
exports.bcfVersionProjectsProject_idDocumentsPOST = function(version,project_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "guid" : "472ab37a-6122-448e-86fc-86503183b520",
  "filename" : "Official_Building_Permission.pdf"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

