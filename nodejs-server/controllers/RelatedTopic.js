'use strict';

var utils = require('../utils/writer.js');
var RelatedTopic = require('../service/RelatedTopicService');

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidRelated_topicsGET = function bcfVersionProjectsProject_idTopicsTopic_guidRelated_topicsGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  RelatedTopic.bcfVersionProjectsProject_idTopicsTopic_guidRelated_topicsGET(version,project_id,topic_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidRelated_topicsPUT = function bcfVersionProjectsProject_idTopicsTopic_guidRelated_topicsPUT (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var related_topic_PUT = req.swagger.params['related_topic_PUT'].value;
  RelatedTopic.bcfVersionProjectsProject_idTopicsTopic_guidRelated_topicsPUT(version,project_id,topic_guid,related_topic_PUT)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
