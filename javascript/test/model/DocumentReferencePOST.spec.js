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
    instance = new Bcfapi.DocumentReferencePOST();
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

  describe('DocumentReferencePOST', function() {
    it('should create an instance of DocumentReferencePOST', function() {
      // uncomment below and update the code to test DocumentReferencePOST
      //var instane = new Bcfapi.DocumentReferencePOST();
      //expect(instance).to.be.a(Bcfapi.DocumentReferencePOST);
    });

    it('should have the property documentGuid (base name: "document_guid")', function() {
      // uncomment below and update the code to test the property documentGuid
      //var instane = new Bcfapi.DocumentReferencePOST();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new Bcfapi.DocumentReferencePOST();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Bcfapi.DocumentReferencePOST();
      //expect(instance).to.be();
    });

  });

}));
