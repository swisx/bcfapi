'use strict';

var utils = require('../utils/writer.js');
var CommentEvents = require('../service/CommentEventsService');

module.exports.bcfVersionProjectsProject_idTopicsCommentsEventsGET = function bcfVersionProjectsProject_idTopicsCommentsEventsGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  CommentEvents.bcfVersionProjectsProject_idTopicsCommentsEventsGET(version,project_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidEventsGET = function bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidEventsGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var comment_guid = req.swagger.params['comment_guid'].value;
  CommentEvents.bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidEventsGET(version,project_id,topic_guid,comment_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
