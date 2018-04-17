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
    instance = new Bcfapi.FileGET();
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

  describe('FileGET', function() {
    it('should create an instance of FileGET', function() {
      // uncomment below and update the code to test FileGET
      //var instane = new Bcfapi.FileGET();
      //expect(instance).to.be.a(Bcfapi.FileGET);
    });

    it('should have the property ifcProject (base name: "ifc_project")', function() {
      // uncomment below and update the code to test the property ifcProject
      //var instane = new Bcfapi.FileGET();
      //expect(instance).to.be();
    });

    it('should have the property ifcSpatialStructureElement (base name: "ifc_spatial_structure_element")', function() {
      // uncomment below and update the code to test the property ifcSpatialStructureElement
      //var instane = new Bcfapi.FileGET();
      //expect(instance).to.be();
    });

    it('should have the property fileName (base name: "file_name")', function() {
      // uncomment below and update the code to test the property fileName
      //var instane = new Bcfapi.FileGET();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new Bcfapi.FileGET();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instane = new Bcfapi.FileGET();
      //expect(instance).to.be();
    });

  });

}));
