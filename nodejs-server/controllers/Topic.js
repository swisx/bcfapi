'use strict';

var utils = require('../utils/writer.js');
var Topic = require('../service/TopicService');

module.exports.bcfVersionProjectsProject_idTopicsGET = function bcfVersionProjectsProject_idTopicsGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  Topic.bcfVersionProjectsProject_idTopicsGET(version,project_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsPOST = function bcfVersionProjectsProject_idTopicsPOST (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_POST = req.swagger.params['Topic_POST'].value;
  Topic.bcfVersionProjectsProject_idTopicsPOST(version,project_id,topic_POST)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidDELETE = function bcfVersionProjectsProject_idTopicsTopic_guidDELETE (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  Topic.bcfVersionProjectsProject_idTopicsTopic_guidDELETE(version,project_id,topic_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidGET = function bcfVersionProjectsProject_idTopicsTopic_guidGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  Topic.bcfVersionProjectsProject_idTopicsTopic_guidGET(version,project_id,topic_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidPUT = function bcfVersionProjectsProject_idTopicsTopic_guidPUT (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var topic_PUT = req.swagger.params['Topic_PUT'].value;
  Topic.bcfVersionProjectsProject_idTopicsTopic_guidPUT(version,project_id,topic_guid,topic_PUT)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidSnippetGET = function bcfVersionProjectsProject_idTopicsTopic_guidSnippetGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  Topic.bcfVersionProjectsProject_idTopicsTopic_guidSnippetGET(version,project_id,topic_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidSnippetPUT = function bcfVersionProjectsProject_idTopicsTopic_guidSnippetPUT (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  Topic.bcfVersionProjectsProject_idTopicsTopic_guidSnippetPUT(version,project_id,topic_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
