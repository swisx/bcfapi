# Bcfapi.CommentApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsGuidCommentsGet**](CommentApi.md#bcfVersionProjectsProjectIdTopicsGuidCommentsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/comments | Retrieve a collection of all comments related to a topic
[**bcfVersionProjectsProjectIdTopicsGuidCommentsGuidDelete**](CommentApi.md#bcfVersionProjectsProjectIdTopicsGuidCommentsGuidDelete) | **DELETE** /bcf/{version}/projects/{project_id}/topics/{guid}/comments/{guid} | Deletes a single comment.
[**bcfVersionProjectsProjectIdTopicsGuidCommentsGuidGet**](CommentApi.md#bcfVersionProjectsProjectIdTopicsGuidCommentsGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/comments/{guid} | Retrieve a collection of all comments related to a topic
[**bcfVersionProjectsProjectIdTopicsGuidCommentsGuidPut**](CommentApi.md#bcfVersionProjectsProjectIdTopicsGuidCommentsGuidPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{guid}/comments/{guid} | Update a single comment
[**bcfVersionProjectsProjectIdTopicsGuidCommentsPost**](CommentApi.md#bcfVersionProjectsProjectIdTopicsGuidCommentsPost) | **POST** /bcf/{version}/projects/{project_id}/topics/{guid}/comments | Add a new comment to a topic.


<a name="bcfVersionProjectsProjectIdTopicsGuidCommentsGet"></a>
# **bcfVersionProjectsProjectIdTopicsGuidCommentsGet**
> [CommentGET] bcfVersionProjectsProjectIdTopicsGuidCommentsGet(version, projectId, guid)

Retrieve a collection of all comments related to a topic

Retrieve a collection of all comments related to a topic (default ordering is date).

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.CommentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidCommentsGet(version, projectId, guid, (error, data, response) => {
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

[**[CommentGET]**](CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidCommentsGuidDelete"></a>
# **bcfVersionProjectsProjectIdTopicsGuidCommentsGuidDelete**
> bcfVersionProjectsProjectIdTopicsGuidCommentsGuidDelete(version, projectId, guid)

Deletes a single comment.

Deletes a single comment. This operation is only possible when the server returns the delete flag in the Comment authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.CommentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Comment guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidCommentsGuidDelete(version, projectId, guid, (error, data, response) => {
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
 **guid** | **String**| Comment guid | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidCommentsGuidGet"></a>
# **bcfVersionProjectsProjectIdTopicsGuidCommentsGuidGet**
> CommentGET bcfVersionProjectsProjectIdTopicsGuidCommentsGuidGet(version, projectId, guid)

Retrieve a collection of all comments related to a topic

Retrieve a collection of all comments related to a topic (default ordering is date).

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.CommentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Comment guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidCommentsGuidGet(version, projectId, guid, (error, data, response) => {
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
 **guid** | **String**| Comment guid | 

### Return type

[**CommentGET**](CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidCommentsGuidPut"></a>
# **bcfVersionProjectsProjectIdTopicsGuidCommentsGuidPut**
> CommentGET bcfVersionProjectsProjectIdTopicsGuidCommentsGuidPut(version, projectId, guid, opts)

Update a single comment

Update a single comment, description similar to POST. This operation is only possible when the server returns the update flag in the Comment authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.CommentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Comment guid

let opts = { 
  'commentPUT': new Bcfapi.CommentPUT() // CommentPUT | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsGuidCommentsGuidPut(version, projectId, guid, opts, (error, data, response) => {
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
 **guid** | **String**| Comment guid | 
 **commentPUT** | [**CommentPUT**](CommentPUT.md)|  | [optional] 

### Return type

[**CommentGET**](CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidCommentsPost"></a>
# **bcfVersionProjectsProjectIdTopicsGuidCommentsPost**
> CommentGET bcfVersionProjectsProjectIdTopicsGuidCommentsPost(version, projectId, guid, opts)

Add a new comment to a topic.

Add a new comment to a topic. This operation is only possible when the server returns the createComment flag in the Topic authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.CommentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid

let opts = { 
  'commentPOST': new Bcfapi.CommentPOST() // CommentPOST | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsGuidCommentsPost(version, projectId, guid, opts, (error, data, response) => {
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
 **commentPOST** | [**CommentPOST**](CommentPOST.md)|  | [optional] 

### Return type

[**CommentGET**](CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

