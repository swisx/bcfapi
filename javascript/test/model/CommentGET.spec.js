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
    instance = new Bcfapi.CommentGET();
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

  describe('CommentGET', function() {
    it('should create an instance of CommentGET', function() {
      // uncomment below and update the code to test CommentGET
      //var instane = new Bcfapi.CommentGET();
      //expect(instance).to.be.a(Bcfapi.CommentGET);
    });

    it('should have the property guid (base name: "guid")', function() {
      // uncomment below and update the code to test the property guid
      //var instane = new Bcfapi.CommentGET();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new Bcfapi.CommentGET();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instane = new Bcfapi.CommentGET();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new Bcfapi.CommentGET();
      //expect(instance).to.be();
    });

    it('should have the property topicGuid (base name: "topic_guid")', function() {
      // uncomment below and update the code to test the property topicGuid
      //var instane = new Bcfapi.CommentGET();
      //expect(instance).to.be();
    });

    it('should have the property viewpointGuid (base name: "viewpoint_guid")', function() {
      // uncomment below and update the code to test the property viewpointGuid
      //var instane = new Bcfapi.CommentGET();
      //expect(instance).to.be();
    });

    it('should have the property replyToCommentGuid (base name: "reply_to_comment_guid")', function() {
      // uncomment below and update the code to test the property replyToCommentGuid
      //var instane = new Bcfapi.CommentGET();
      //expect(instance).to.be();
    });

    it('should have the property modifiedDate (base name: "modified_date")', function() {
      // uncomment below and update the code to test the property modifiedDate
      //var instane = new Bcfapi.CommentGET();
      //expect(instance).to.be();
    });

    it('should have the property modifiedAuthor (base name: "modified_author")', function() {
      // uncomment below and update the code to test the property modifiedAuthor
      //var instane = new Bcfapi.CommentGET();
      //expect(instance).to.be();
    });

    it('should have the property authorization (base name: "authorization")', function() {
      // uncomment below and update the code to test the property authorization
      //var instane = new Bcfapi.CommentGET();
      //expect(instance).to.be();
    });

  });

}));