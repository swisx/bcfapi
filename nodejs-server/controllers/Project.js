'use strict';

var utils = require('../utils/writer.js');
var Project = require('../service/ProjectService');

module.exports.bcfVersionProjectsGET = function bcfVersionProjectsGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  Project.bcfVersionProjectsGET(version)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idExtensionsGET = function bcfVersionProjectsProject_idExtensionsGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  Project.bcfVersionProjectsProject_idExtensionsGET(version,project_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idGET = function bcfVersionProjectsProject_idGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  Project.bcfVersionProjectsProject_idGET(version,project_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idPUT = function bcfVersionProjectsProject_idPUT (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var body = req.swagger.params['body'].value;
  Project.bcfVersionProjectsProject_idPUT(version,project_id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
