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
    instance = new Bcfapi.OrthogonalCamera();
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

  describe('OrthogonalCamera', function() {
    it('should create an instance of OrthogonalCamera', function() {
      // uncomment below and update the code to test OrthogonalCamera
      //var instane = new Bcfapi.OrthogonalCamera();
      //expect(instance).to.be.a(Bcfapi.OrthogonalCamera);
    });

    it('should have the property cameraViewPoint (base name: "camera_view_point")', function() {
      // uncomment below and update the code to test the property cameraViewPoint
      //var instane = new Bcfapi.OrthogonalCamera();
      //expect(instance).to.be();
    });

    it('should have the property cameraDirection (base name: "camera_direction")', function() {
      // uncomment below and update the code to test the property cameraDirection
      //var instane = new Bcfapi.OrthogonalCamera();
      //expect(instance).to.be();
    });

    it('should have the property cameraUpVector (base name: "camera_up_vector")', function() {
      // uncomment below and update the code to test the property cameraUpVector
      //var instane = new Bcfapi.OrthogonalCamera();
      //expect(instance).to.be();
    });

    it('should have the property viewToWorldScale (base name: "view_to_world_scale")', function() {
      // uncomment below and update the code to test the property viewToWorldScale
      //var instane = new Bcfapi.OrthogonalCamera();
      //expect(instance).to.be();
    });

  });

}));