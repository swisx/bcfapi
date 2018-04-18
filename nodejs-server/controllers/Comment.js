'use strict';

var utils = require('../utils/writer.js');
var Comment = require('../service/CommentService');

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidDELETE = function bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidDELETE (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var comment_guid = req.swagger.params['comment_guid'].value;
  Comment.bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidDELETE(version,project_id,topic_guid,comment_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidGET = function bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var comment_guid = req.swagger.params['comment_guid'].value;
  Comment.bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidGET(version,project_id,topic_guid,comment_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidPUT = function bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidPUT (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var comment_guid = req.swagger.params['comment_guid'].value;
  var comment_PUT = req.swagger.params['comment_PUT'].value;
  Comment.bcfVersionProjectsProject_idTopicsTopic_guidCommentsComment_guidPUT(version,project_id,topic_guid,comment_guid,comment_PUT)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidCommentsGET = function bcfVersionProjectsProject_idTopicsTopic_guidCommentsGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  Comment.bcfVersionProjectsProject_idTopicsTopic_guidCommentsGET(version,project_id,topic_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidCommentsPOST = function bcfVersionProjectsProject_idTopicsTopic_guidCommentsPOST (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var comment_POST = req.swagger.params['comment_POST'].value;
  Comment.bcfVersionProjectsProject_idTopicsTopic_guidCommentsPOST(version,project_id,topic_guid,comment_POST)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
