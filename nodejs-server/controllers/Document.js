'use strict';

var utils = require('../utils/writer.js');
var Document = require('../service/DocumentService');

module.exports.bcfVersionProjectsProject_idDocumentsDocument_guidGET = function bcfVersionProjectsProject_idDocumentsDocument_guidGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var document_guid = req.swagger.params['document_guid'].value;
  Document.bcfVersionProjectsProject_idDocumentsDocument_guidGET(version,project_id,document_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idDocumentsGET = function bcfVersionProjectsProject_idDocumentsGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  Document.bcfVersionProjectsProject_idDocumentsGET(version,project_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idDocumentsPOST = function bcfVersionProjectsProject_idDocumentsPOST (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  Document.bcfVersionProjectsProject_idDocumentsPOST(version,project_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
