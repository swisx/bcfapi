'use strict';

var utils = require('../utils/writer.js');
var File = require('../service/FileService');

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidFilesGET = function bcfVersionProjectsProject_idTopicsTopic_guidFilesGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  File.bcfVersionProjectsProject_idTopicsTopic_guidFilesGET(version,project_id,topic_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidFilesPUT = function bcfVersionProjectsProject_idTopicsTopic_guidFilesPUT (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var file_PUT = req.swagger.params['File_PUT'].value;
  File.bcfVersionProjectsProject_idTopicsTopic_guidFilesPUT(version,project_id,topic_guid,file_PUT)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
