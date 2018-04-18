'use strict';


/**
 * Retrieve a collection of all viewpoints related to a topic.
 * Retrieve a collection of all viewpoints related to a topic.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsGET = function(version,project_id,topic_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "guid" : "b24a82e9-f67b-43b8-bda0-4946abf39624",
  "perspective_camera" : {
    "camera_view_point" : {
      "x" : 0,
      "y" : 0,
      "z" : 0
    },
    "camera_direction" : {
      "x" : 1,
      "y" : 1,
      "z" : 2
    },
    "camera_up_vector" : {
      "x" : 0,
      "y" : 0,
      "z" : 1
    },
    "field_of_view" : 90
  },
  "lines" : [ {
    "start_point" : {
      "x" : 2,
      "y" : 1,
      "z" : 1
    },
    "end_point" : {
      "x" : 0,
      "y" : 1,
      "z" : 0.7
    }
  } ],
  "clipping_planes" : [ {
    "location" : {
      "x" : 0.7,
      "y" : 0.3,
      "z" : -0.2
    },
    "direction" : {
      "x" : 1,
      "y" : 0.4,
      "z" : 0.1
    }
  } ]
}, {
  "guid" : "a11a82e7-e66c-34b4-ada1-5846abf39133",
  "perspective_camera" : {
    "camera_view_point" : {
      "x" : 0,
      "y" : 0,
      "z" : 0
    },
    "camera_direction" : {
      "x" : 1,
      "y" : 1,
      "z" : 2
    },
    "camera_up_vector" : {
      "x" : 0,
      "y" : 0,
      "z" : 1
    },
    "field_of_view" : 90
  },
  "lines" : [ {
    "start_point" : {
      "x" : 1,
      "y" : 1,
      "z" : 1
    },
    "end_point" : {
      "x" : 0,
      "y" : 0,
      "z" : 0
    }
  } ],
  "clipping_planes" : [ {
    "location" : {
      "x" : 0.5,
      "y" : 0.5,
      "z" : 0.5
    },
    "direction" : {
      "x" : 1,
      "y" : 0,
      "z" : 0
    }
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new viewpoint.
 * Add a new viewpoint. Viewpoints are immutable, meaning that they should never change. Requirements for different visualizations should be handled by creating new viewpoint elements. This operation is only possible when the server returns the createViewpoint flag in the Topic authorization.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * viewpoint_POST Viewpoint_POST  (optional)
 * returns viewpoint_GET
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsPOST = function(version,project_id,topic_guid,viewpoint_POST) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a specific viewpoints bitmap image file (png or jpg).
 * Retrieve a specific viewpoints bitmap image file (png or jpg).
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * viewpoint_guid String Viewpoint guid
 * bitmap_guid String Bitmap guid
 * no response value expected for this operation
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidBitmapsBitmap_guidGET = function(version,project_id,topic_guid,viewpoint_guid,bitmap_guid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a collection of all colored components in a viewpoint.
 * Retrieve a collection of all colored components in a viewpoint.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * viewpoint_guid String Viewpoint guid
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidColoringGET = function(version,project_id,topic_guid,viewpoint_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "coloring" : [ {
    "color" : "#ff0000",
    "components" : [ {
      "ifc_guid" : "2MF28NhmDBiRVyFakgdbCT",
      "originating_system" : "Example CAD Application",
      "authoring_tool_id" : "EXCAD/v1.0"
    }, {
      "ifc_guid" : "3$cshxZO9AJBebsni$z9Yk"
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a collection of all viewpoints related to a topic.
 * Retrieve a collection of all viewpoints related to a topic.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * viewpoint_guid String Viewpoint guid
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidGET = function(version,project_id,topic_guid,viewpoint_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "guid" : "a11a82e7-e66c-34b4-ada1-5846abf39133",
  "index" : 10,
  "perspective_camera" : {
    "camera_view_point" : {
      "x" : 0,
      "y" : 0,
      "z" : 0
    },
    "camera_direction" : {
      "x" : 1,
      "y" : 1,
      "z" : 2
    },
    "camera_up_vector" : {
      "x" : 0,
      "y" : 0,
      "z" : 1
    },
    "field_of_view" : 90
  },
  "lines" : [ {
    "start_point" : {
      "x" : 1,
      "y" : 1,
      "z" : 1
    },
    "end_point" : {
      "x" : 0,
      "y" : 0,
      "z" : 0
    }
  } ],
  "clipping_planes" : [ {
    "location" : {
      "x" : 0.5,
      "y" : 0.5,
      "z" : 0.5
    },
    "direction" : {
      "x" : 1,
      "y" : 0,
      "z" : 0
    }
  } ],
  "bitmaps" : [ {
    "guid" : "20c1cb56-315f-4a0a-922d-ed7a4a8edf55",
    "bitmap_type" : "jpg",
    "location" : {
      "x" : 10,
      "y" : -10,
      "z" : 7
    },
    "normal" : {
      "x" : -1,
      "y" : 1.25,
      "z" : 0
    },
    "up" : {
      "x" : -5.4,
      "y" : -4.3,
      "z" : 1
    },
    "height" : 1666
  } ],
  "snapshot" : {
    "snapshot_type" : "png"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a collection of all selected components in a viewpoint.
 * Retrieve a collection of all selected components in a viewpoint.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * viewpoint_guid String Viewpoint guid
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidSelectionGET = function(version,project_id,topic_guid,viewpoint_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "selection" : [ {
    "ifc_guid" : "2MF28NhmDBiRVyFakgdbCT",
    "originating_system" : "Example CAD Application",
    "authoring_tool_id" : "EXCAD/v1.0"
  }, {
    "ifc_guid" : "3$cshxZO9AJBebsni$z9Yk"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a viewpoints snapshot (png or jpg) as image file.
 * Retrieve a viewpoints snapshot (png or jpg) as image file.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * viewpoint_guid String Viewpoint guid
 * no response value expected for this operation
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidSnapshotGET = function(version,project_id,topic_guid,viewpoint_guid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve visibility of components in a viewpoint.
 * Retrieve visibility of components in a viewpoint.
 *
 * version String BFC Version
 * project_id String Project ID
 * topic_guid String Topic guid
 * viewpoint_guid String Viewpoint guid
 * returns List
 **/
exports.bcfVersionProjectsProject_idTopicsTopic_guidViewpointsViewpoint_guidVisibilityGET = function(version,project_id,topic_guid,viewpoint_guid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "visibility" : {
    "default_visibility" : true,
    "exceptions" : [ {
      "ifc_guid" : "2MF28NhmDBiRVyFakgdbCT",
      "originating_system" : "Example CAD Application",
      "authoring_tool_id" : "EXCAD/v1.0"
    }, {
      "ifc_guid" : "3$cshxZO9AJBebsni$z9Yk"
    } ],
    "view_setup_hints" : {
      "spaces_visible" : true,
      "space_boundaries_visible" : false,
      "openings_visible" : true
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

