# Bcfapi.TopicApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsGet**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGet) | **GET** /bcf/{version}/projects/{project_id}/topics | Retrieve a collection of topics related to a project
[**bcfVersionProjectsProjectIdTopicsGuidDelete**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGuidDelete) | **DELETE** /bcf/{version}/projects/{project_id}/topics/{guid} | Deletes a single topic.
[**bcfVersionProjectsProjectIdTopicsGuidGet**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid} | Retrieve a specific topic.
[**bcfVersionProjectsProjectIdTopicsGuidPut**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGuidPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{guid} | Modify a specific topic
[**bcfVersionProjectsProjectIdTopicsGuidSnippetGet**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGuidSnippetGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/snippet | Retrieves a topics BIM-Snippet as binary file.
[**bcfVersionProjectsProjectIdTopicsGuidSnippetPut**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGuidSnippetPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{guid}/snippet | Puts a new BIM Snippet binary file to a topic
[**bcfVersionProjectsProjectIdTopicsPost**](TopicApi.md#bcfVersionProjectsProjectIdTopicsPost) | **POST** /bcf/{version}/projects/{project_id}/topics | Add a new topic.


<a name="bcfVersionProjectsProjectIdTopicsGet"></a>
# **bcfVersionProjectsProjectIdTopicsGet**
> [TopicGET] bcfVersionProjectsProjectIdTopicsGet(version, projectId, )

Retrieve a collection of topics related to a project

Retrieve a collection of topics related to a project (default sort order is creation_date).

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID


apiInstance.bcfVersionProjectsProjectIdTopicsGet(version, projectId, , (error, data, response) => {
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

### Return type

[**[TopicGET]**](TopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidDelete"></a>
# **bcfVersionProjectsProjectIdTopicsGuidDelete**
> bcfVersionProjectsProjectIdTopicsGuidDelete(version, projectId, guid)

Deletes a single topic.

Deletes a single topic. This operation is only possible when the server returns the delete flag in the Topic authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidDelete(version, projectId, guid, (error, data, response) => {
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
 **guid** | **String**| Topic guid | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidGet"></a>
# **bcfVersionProjectsProjectIdTopicsGuidGet**
> TopicGET bcfVersionProjectsProjectIdTopicsGuidGet(version, projectId, guid)

Retrieve a specific topic.

Retrieve a specific topic.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidGet(version, projectId, guid, (error, data, response) => {
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

[**TopicGET**](TopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidPut"></a>
# **bcfVersionProjectsProjectIdTopicsGuidPut**
> TopicGET bcfVersionProjectsProjectIdTopicsGuidPut(version, projectId, guid, opts)

Modify a specific topic

Modify a specific topic, description similar to POST. This operation is only possible when the server returns the update flag in the Topic authorization

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid

let opts = { 
  'topicPUT': new Bcfapi.TopicPUT() // TopicPUT | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsGuidPut(version, projectId, guid, opts, (error, data, response) => {
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
 **topicPUT** | [**TopicPUT**](TopicPUT.md)|  | [optional] 

### Return type

[**TopicGET**](TopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidSnippetGet"></a>
# **bcfVersionProjectsProjectIdTopicsGuidSnippetGet**
> BimSnippet bcfVersionProjectsProjectIdTopicsGuidSnippetGet(version, projectId, guid)

Retrieves a topics BIM-Snippet as binary file.

Retrieves a topics BIM-Snippet as binary file.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidSnippetGet(version, projectId, guid, (error, data, response) => {
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

[**BimSnippet**](BimSnippet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidSnippetPut"></a>
# **bcfVersionProjectsProjectIdTopicsGuidSnippetPut**
> bcfVersionProjectsProjectIdTopicsGuidSnippetPut(version, projectId, guid)

Puts a new BIM Snippet binary file to a topic

Puts a new BIM Snippet binary file to a topic. If this is used, the parent topics BIM Snippet property is_external must be set to false and the reference must be the file name with extension. This operation is only possible when the server returns the updateBimSnippet flag in the Topic authorization. THERE IS NO BODY EXAMPLE!

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidSnippetPut(version, projectId, guid, (error, data, response) => {
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
 **guid** | **String**| Topic guid | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsPost"></a>
# **bcfVersionProjectsProjectIdTopicsPost**
> TopicGET bcfVersionProjectsProjectIdTopicsPost(version, projectId, , opts)

Add a new topic.

Add a new topic. This operation is only possible when the server returns the createTopic flag in the Project authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let opts = { 
  'topicPOST': new Bcfapi.TopicPOST() // TopicPOST | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsPost(version, projectId, , opts, (error, data, response) => {
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
 **topicPOST** | [**TopicPOST**](TopicPOST.md)|  | [optional] 

### Return type

[**TopicGET**](TopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

