'use strict';

var utils = require('../utils/writer.js');
var DocumentReference = require('../service/DocumentReferenceService');

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidDocument_referencesGET = function bcfVersionProjectsProject_idTopicsTopic_guidDocument_referencesGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  DocumentReference.bcfVersionProjectsProject_idTopicsTopic_guidDocument_referencesGET(version,project_id,topic_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidDocument_referencesPOST = function bcfVersionProjectsProject_idTopicsTopic_guidDocument_referencesPOST (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var document_reference_POST = req.swagger.params['Document_reference_POST'].value;
  DocumentReference.bcfVersionProjectsProject_idTopicsTopic_guidDocument_referencesPOST(version,project_id,topic_guid,document_reference_POST)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
