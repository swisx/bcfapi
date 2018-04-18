'use strict';

var utils = require('../utils/writer.js');
var Viewpoint = require('../service/ViewpointService');

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsGET = function bcfVersionProjectsProject_idTopicsTopic_guidViewpointsGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  Viewpoint.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsGET(version,project_id,topic_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsPOST = function bcfVersionProjectsProject_idTopicsTopic_guidViewpointsPOST (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var viewpoint_POST = req.swagger.params['viewpoint_POST'].value;
  Viewpoint.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsPOST(version,project_id,topic_guid,viewpoint_POST)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidBitmapsBitmap_guidGET = function bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidBitmapsBitmap_guidGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var viewpoint_guid = req.swagger.params['viewpoint_guid'].value;
  var bitmap_guid = req.swagger.params['bitmap_guid'].value;
  Viewpoint.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidBitmapsBitmap_guidGET(version,project_id,topic_guid,viewpoint_guid,bitmap_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidColoringGET = function bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidColoringGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var viewpoint_guid = req.swagger.params['viewpoint_guid'].value;
  Viewpoint.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidColoringGET(version,project_id,topic_guid,viewpoint_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidGET = function bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var viewpoint_guid = req.swagger.params['viewpoint_guid'].value;
  Viewpoint.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidGET(version,project_id,topic_guid,viewpoint_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidSelectionGET = function bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidSelectionGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var viewpoint_guid = req.swagger.params['viewpoint_guid'].value;
  Viewpoint.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidSelectionGET(version,project_id,topic_guid,viewpoint_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidSnapshotGET = function bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidSnapshotGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var viewpoint_guid = req.swagger.params['viewpoint_guid'].value;
  Viewpoint.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidSnapshotGET(version,project_id,topic_guid,viewpoint_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidVisibilityGET = function bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidVisibilityGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  var project_id = req.swagger.params['project_id'].value;
  var topic_guid = req.swagger.params['topic_guid'].value;
  var viewpoint_guid = req.swagger.params['viewpoint_guid'].value;
  Viewpoint.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidVisibilityGET(version,project_id,topic_guid,viewpoint_guid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
