'use strict';

var utils = require('../utils/writer.js');
var Public = require('../service/PublicService');

module.exports.bcfVersionAuthGET = function bcfVersionAuthGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  Public.bcfVersionAuthGET(version)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionCurrent_userGET = function bcfVersionCurrent_userGET (req, res, next) {
  var version = req.swagger.params['version'].value;
  Public.bcfVersionCurrent_userGET(version)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bcfVersionsGET = function bcfVersionsGET (req, res, next) {
  Public.bcfVersionsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
