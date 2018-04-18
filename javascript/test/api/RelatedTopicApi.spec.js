/**
 * BCFAPI
 * A BCF API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Bcfapi);
  }
}(this, function(expect, Bcfapi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Bcfapi.RelatedTopicApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RelatedTopicApi', function() {
    describe('bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet', function() {
      it('should call bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet successfully', function(done) {
        //uncomment below and update the code to test bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet
        //instance.bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut', function() {
      it('should call bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut successfully', function(done) {
        //uncomment below and update the code to test bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut
        //instance.bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
