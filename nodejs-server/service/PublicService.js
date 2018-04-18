'use strict';


/**
 * Obtaining Authentication Information
 *
 * version String BFC Version
 * returns List
 **/
exports.bcfVersionAuthGET = function(version) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "oauth2_auth_url" : "https://example.com/bcf/oauth2/auth",
  "oauth2_token_url" : "https://example.com/bcf/oauth2/token",
  "oauth2_dynamic_client_reg_url" : "https://example.com/bcf/oauth2/reg",
  "http_basic_supported" : true,
  "supported_oauth2_flows" : [ "authorization_code_grant", "implicit_grant", "resource_owner_password_credentials_grant" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get current user
 * Get current user
 *
 * version String BFC Version
 * returns user_GET
 **/
exports.bcfVersionCurrent_userGET = function(version) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "Architect@example.com",
  "name" : "John Doe"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of versions
 * Returns a list of all supported BCF API versions of the server.
 *
 * returns List
 **/
exports.bcfVersionsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "version_id" : "1.0",
  "detailed_version" : "https://github.com/BuildingSMART/BCF-API"
}, {
  "version_id" : "2.1",
  "detailed_version" : "https://github.com/BuildingSMART/BCF-API"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

