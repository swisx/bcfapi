'use strict';


/**
 * Retrieve a collection of file references as topic header.
 * Retrieve a collection of file references as topic header.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidFilesGET = function(version,project_id,topic_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ifc_project" : "0J$yPqHBD12v72y4qF6XcD",
  "file_name" : "OfficeBuilding_Architecture_0001.ifc",
  "reference" : "https://example.com/files/0J$yPqHBD12v72y4qF6XcD_0001.ifc"
}, {
  "ifc_project" : "3hwBHP91jBRwPsmyf$3Hea",
  "file_name" : "OfficeBuilding_Heating_0003.ifc",
  "reference" : "cf37bae6-0900-46be-b37f-b34754fe0b4a"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a collection of file references on the topic header.
 * Update a collection of file references on the topic header. This operation is only possible when the server returns the updateFiles flag in the Topic authorization.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * file_PUT File_PUT  (optional)
 * returns file_GET
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidFilesPUT = function(version,project_id,topic_guid,file_PUT) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ifc_project" : "0J$yPqHBD12v72y4qF6XcD",
  "file_name" : "OfficeBuilding_Architecture_0001.ifc",
  "reference" : "https://example.com/files/0J$yPqHBD12v72y4qF6XcD_0001.ifc"
}, {
  "ifc_project" : "3hwBHP91jBRwPsmyf$3Hea",
  "file_name" : "OfficeBuilding_Heating_0003.ifc",
  "reference" : "https://example.com/files/3hwBHP91jBRwPsmyf$3Hea_0003.ifc"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

