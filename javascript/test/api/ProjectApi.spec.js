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
    instance = new Bcfapi.ProjectApi();
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

  describe('ProjectApi', function() {
    describe('bcfVersionProjectsGet', function() {
      it('should call bcfVersionProjectsGet successfully', function(done) {
        //uncomment below and update the code to test bcfVersionProjectsGet
        //instance.bcfVersionProjectsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bcfVersionProjectsProjectIdExtensionsGet', function() {
      it('should call bcfVersionProjectsProjectIdExtensionsGet successfully', function(done) {
        //uncomment below and update the code to test bcfVersionProjectsProjectIdExtensionsGet
        //instance.bcfVersionProjectsProjectIdExtensionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bcfVersionProjectsProjectIdGet', function() {
      it('should call bcfVersionProjectsProjectIdGet successfully', function(done) {
        //uncomment below and update the code to test bcfVersionProjectsProjectIdGet
        //instance.bcfVersionProjectsProjectIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bcfVersionProjectsProjectIdPut', function() {
      it('should call bcfVersionProjectsProjectIdPut successfully', function(done) {
        //uncomment below and update the code to test bcfVersionProjectsProjectIdPut
        //instance.bcfVersionProjectsProjectIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
