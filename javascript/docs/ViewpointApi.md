# Bcfapi.ViewpointApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints | Retrieve a collection of all viewpoints related to a topic.
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsPost**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsPost) | **POST** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints | Add a new viewpoint.
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidBitmapsBitmapGuidGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidBitmapsBitmapGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints/{viewpoint_guid}/bitmaps/{bitmap_guid} | Retrieve a specific viewpoints bitmap image file (png or jpg).
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidColoringGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidColoringGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints/{viewpoint_guid}/coloring | Retrieve a collection of all colored components in a viewpoint.
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints/{viewpoint_guid} | Retrieve a collection of all viewpoints related to a topic.
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSelectionGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSelectionGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints/{viewpoint_guid}/selection | Retrieve a collection of all selected components in a viewpoint.
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSnapshotGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSnapshotGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints/{viewpoint_guid}/snapshot | Retrieve a viewpoints snapshot (png or jpg) as image file.
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidVisibilityGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidVisibilityGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints/{viewpoint_guid}/visibility | Retrieve visibility of components in a viewpoint.


<a name="bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsGet**
> [ViewpointGET] bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsGet(version, projectId, topicGuid, )

Retrieve a collection of all viewpoints related to a topic.

Retrieve a collection of all viewpoints related to a topic.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsGet(version, projectId, topicGuid, , (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| BFC Version | 
 **projectId** | **String**| Project ID | 
 **topicGuid** | **String**| Topic guid | 

### Return type

[**[ViewpointGET]**](ViewpointGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsPost"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsPost**
> ViewpointGET bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsPost(version, projectId, topicGuid, , opts)

Add a new viewpoint.

Add a new viewpoint. Viewpoints are immutable, meaning that they should never change. Requirements for different visualizations should be handled by creating new viewpoint elements. This operation is only possible when the server returns the createViewpoint flag in the Topic authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let opts = { 
  'viewpointPOST': new Bcfapi.ViewpointPOST() // ViewpointPOST | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsPost(version, projectId, topicGuid, , opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| BFC Version | 
 **projectId** | **String**| Project ID | 
 **topicGuid** | **String**| Topic guid | 
 **viewpointPOST** | [**ViewpointPOST**](ViewpointPOST.md)|  | [optional] 

### Return type

[**ViewpointGET**](ViewpointGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidBitmapsBitmapGuidGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidBitmapsBitmapGuidGet**
> bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidBitmapsBitmapGuidGet(version, projectId, topicGuid, viewpointGuidbitmapGuid)

Retrieve a specific viewpoints bitmap image file (png or jpg).

Retrieve a specific viewpoints bitmap image file (png or jpg).

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let viewpointGuid = "viewpointGuid_example"; // String | Viewpoint guid

let bitmapGuid = "bitmapGuid_example"; // String | Bitmap guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidBitmapsBitmapGuidGet(version, projectId, topicGuid, viewpointGuidbitmapGuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| BFC Version | 
 **projectId** | **String**| Project ID | 
 **topicGuid** | **String**| Topic guid | 
 **viewpointGuid** | **String**| Viewpoint guid | 
 **bitmapGuid** | **String**| Bitmap guid | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidColoringGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidColoringGet**
> [ColoringGET] bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidColoringGet(version, projectId, topicGuid, viewpointGuid)

Retrieve a collection of all colored components in a viewpoint.

Retrieve a collection of all colored components in a viewpoint.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let viewpointGuid = "viewpointGuid_example"; // String | Viewpoint guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidColoringGet(version, projectId, topicGuid, viewpointGuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| BFC Version | 
 **projectId** | **String**| Project ID | 
 **topicGuid** | **String**| Topic guid | 
 **viewpointGuid** | **String**| Viewpoint guid | 

### Return type

[**[ColoringGET]**](ColoringGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidGet**
> [ViewpointGET] bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidGet(version, projectId, topicGuid, viewpointGuid)

Retrieve a collection of all viewpoints related to a topic.

Retrieve a collection of all viewpoints related to a topic.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let viewpointGuid = "viewpointGuid_example"; // String | Viewpoint guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidGet(version, projectId, topicGuid, viewpointGuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| BFC Version | 
 **projectId** | **String**| Project ID | 
 **topicGuid** | **String**| Topic guid | 
 **viewpointGuid** | **String**| Viewpoint guid | 

### Return type

[**[ViewpointGET]**](ViewpointGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSelectionGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSelectionGet**
> [SelectionGET] bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSelectionGet(version, projectId, topicGuid, viewpointGuid)

Retrieve a collection of all selected components in a viewpoint.

Retrieve a collection of all selected components in a viewpoint.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let viewpointGuid = "viewpointGuid_example"; // String | Viewpoint guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSelectionGet(version, projectId, topicGuid, viewpointGuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| BFC Version | 
 **projectId** | **String**| Project ID | 
 **topicGuid** | **String**| Topic guid | 
 **viewpointGuid** | **String**| Viewpoint guid | 

### Return type

[**[SelectionGET]**](SelectionGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSnapshotGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSnapshotGet**
> bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSnapshotGet(version, projectId, topicGuid, viewpointGuid)

Retrieve a viewpoints snapshot (png or jpg) as image file.

Retrieve a viewpoints snapshot (png or jpg) as image file.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let viewpointGuid = "viewpointGuid_example"; // String | Viewpoint guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSnapshotGet(version, projectId, topicGuid, viewpointGuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| BFC Version | 
 **projectId** | **String**| Project ID | 
 **topicGuid** | **String**| Topic guid | 
 **viewpointGuid** | **String**| Viewpoint guid | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidVisibilityGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidVisibilityGet**
> [VisibilityGET] bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidVisibilityGet(version, projectId, topicGuid, viewpointGuid)

Retrieve visibility of components in a viewpoint.

Retrieve visibility of components in a viewpoint.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let viewpointGuid = "viewpointGuid_example"; // String | Viewpoint guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidVisibilityGet(version, projectId, topicGuid, viewpointGuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**| BFC Version | 
 **projectId** | **String**| Project ID | 
 **topicGuid** | **String**| Topic guid | 
 **viewpointGuid** | **String**| Viewpoint guid | 

### Return type

[**[VisibilityGET]**](VisibilityGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

