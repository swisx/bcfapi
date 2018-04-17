# Bcfapi.ViewpointApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet**](ViewpointApi.md#bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet) | **GET** /bcf/{version}/projects/{guid}/topics/{guid}/viewpoints/{guid}/bitmaps/{guid} | Retrieve a specific viewpoints bitmap image file (png or jpg).
[**bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet**](ViewpointApi.md#bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet) | **GET** /bcf/{version}/projects/{guid}/topics/{guid}/viewpoints/{guid}/snapshot | Retrieve a viewpoints snapshot (png or jpg) as image file.
[**bcfVersionProjectsProjectIdTopicsGuidViewpointsGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsGuidViewpointsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints | Retrieve a collection of all viewpoints related to a topic.
[**bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid}/coloring | Retrieve a collection of all colored components in a viewpoint.
[**bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid} | Retrieve a collection of all viewpoints related to a topic.
[**bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid}/selection | Retrieve a collection of all selected components in a viewpoint.
[**bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid}/visibility | Retrieve visibility of components in a viewpoint.
[**bcfVersionProjectsProjectIdTopicsGuidViewpointsPost**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsGuidViewpointsPost) | **POST** /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints | Add a new viewpoint.


<a name="bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet"></a>
# **bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet**
> bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet(version, projectId, guid)

Retrieve a specific viewpoints bitmap image file (png or jpg).

Retrieve a specific viewpoints bitmap image file (png or jpg).

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Bitmap guid


apiInstance.bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet(version, projectId, guid, (error, data, response) => {
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
 **guid** | **String**| Bitmap guid | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet"></a>
# **bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet**
> bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet(version, projectId, guid)

Retrieve a viewpoints snapshot (png or jpg) as image file.

Retrieve a viewpoints snapshot (png or jpg) as image file.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Viewpoint guid


apiInstance.bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet(version, projectId, guid, (error, data, response) => {
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
 **guid** | **String**| Viewpoint guid | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidViewpointsGet"></a>
# **bcfVersionProjectsProjectIdTopicsGuidViewpointsGet**
> [ViewpointGET] bcfVersionProjectsProjectIdTopicsGuidViewpointsGet(version, projectId, guid)

Retrieve a collection of all viewpoints related to a topic.

Retrieve a collection of all viewpoints related to a topic.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidViewpointsGet(version, projectId, guid, (error, data, response) => {
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
 **guid** | **String**| Topic guid | 

### Return type

[**[ViewpointGET]**](ViewpointGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet"></a>
# **bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet**
> [ColoringGET] bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet(version, projectId, guid)

Retrieve a collection of all colored components in a viewpoint.

Retrieve a collection of all colored components in a viewpoint.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Viewpoint guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet(version, projectId, guid, (error, data, response) => {
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
 **guid** | **String**| Viewpoint guid | 

### Return type

[**[ColoringGET]**](ColoringGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet"></a>
# **bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet**
> [ViewpointGET] bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet(version, projectId, guid)

Retrieve a collection of all viewpoints related to a topic.

Retrieve a collection of all viewpoints related to a topic.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Viewpoint guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet(version, projectId, guid, (error, data, response) => {
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
 **guid** | **String**| Viewpoint guid | 

### Return type

[**[ViewpointGET]**](ViewpointGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet"></a>
# **bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet**
> [SelectionGET] bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet(version, projectId, guid)

Retrieve a collection of all selected components in a viewpoint.

Retrieve a collection of all selected components in a viewpoint.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Viewpoint guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet(version, projectId, guid, (error, data, response) => {
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
 **guid** | **String**| Viewpoint guid | 

### Return type

[**[SelectionGET]**](SelectionGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet"></a>
# **bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet**
> [VisibilityGET] bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet(version, projectId, guid)

Retrieve visibility of components in a viewpoint.

Retrieve visibility of components in a viewpoint.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Viewpoint guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet(version, projectId, guid, (error, data, response) => {
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
 **guid** | **String**| Viewpoint guid | 

### Return type

[**[VisibilityGET]**](VisibilityGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidViewpointsPost"></a>
# **bcfVersionProjectsProjectIdTopicsGuidViewpointsPost**
> ViewpointGET bcfVersionProjectsProjectIdTopicsGuidViewpointsPost(version, projectId, guid, opts)

Add a new viewpoint.

Add a new viewpoint. Viewpoints are immutable, meaning that they should never change. Requirements for different visualizations should be handled by creating new viewpoint elements. This operation is only possible when the server returns the createViewpoint flag in the Topic authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ViewpointApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid

let opts = { 
  'viewpointPOST': new Bcfapi.ViewpointPOST() // ViewpointPOST | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsGuidViewpointsPost(version, projectId, guid, opts, (error, data, response) => {
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
 **guid** | **String**| Topic guid | 
 **viewpointPOST** | [**ViewpointPOST**](ViewpointPOST.md)|  | [optional] 

### Return type

[**ViewpointGET**](ViewpointGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

