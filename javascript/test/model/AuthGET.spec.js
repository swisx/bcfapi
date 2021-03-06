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
    instance = new Bcfapi.AuthGET();
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

  describe('AuthGET', function() {
    it('should create an instance of AuthGET', function() {
      // uncomment below and update the code to test AuthGET
      //var instane = new Bcfapi.AuthGET();
      //expect(instance).to.be.a(Bcfapi.AuthGET);
    });

    it('should have the property oauth2AuthUrl (base name: "oauth2_auth_url")', function() {
      // uncomment below and update the code to test the property oauth2AuthUrl
      //var instane = new Bcfapi.AuthGET();
      //expect(instance).to.be();
    });

    it('should have the property oauth2TokenUrl (base name: "oauth2_token_url")', function() {
      // uncomment below and update the code to test the property oauth2TokenUrl
      //var instane = new Bcfapi.AuthGET();
      //expect(instance).to.be();
    });

    it('should have the property oauth2DynamicClientRegUrl (base name: "oauth2_dynamic_client_reg_url")', function() {
      // uncomment below and update the code to test the property oauth2DynamicClientRegUrl
      //var instane = new Bcfapi.AuthGET();
      //expect(instance).to.be();
    });

    it('should have the property httpBasicSupported (base name: "http_basic_supported")', function() {
      // uncomment below and update the code to test the property httpBasicSupported
      //var instane = new Bcfapi.AuthGET();
      //expect(instance).to.be();
    });

    it('should have the property supportedOauth2Flows (base name: "supported_oauth2_flows")', function() {
      // uncomment below and update the code to test the property supportedOauth2Flows
      //var instane = new Bcfapi.AuthGET();
      //expect(instance).to.be();
    });

  });

}));
