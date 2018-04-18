'use strict';

var utils = require('../utils/writer.js');
var TopicEvents = require('../service/TopicEventsService');

module.exports.bcfVersionProjectsProject_idTopicsEventsGET = function bcfVersionProjectsProject_idTopicsEventsGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  TopicEvents.bcfVersionProjectsProject_idTopicsEventsGET(version,project_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidEventsGET = function bcfVersionProjectsProject_idTopicsTopic_guidEventsGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  TopicEvents.bcfVersionProjectsProject_idTopicsTopic_guidEventsGET(version,project_id,topic_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
