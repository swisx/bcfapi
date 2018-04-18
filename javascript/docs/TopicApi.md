# Bcfapi.TopicApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsGet**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGet) | **GET** /bcf/{version}/projects/{project_id}/topics | Retrieve a collection of topics related to a project
[**bcfVersionProjectsProjectIdTopicsPost**](TopicApi.md#bcfVersionProjectsProjectIdTopicsPost) | **POST** /bcf/{version}/projects/{project_id}/topics | Add a new topic.
[**bcfVersionProjectsProjectIdTopicsTopicGuidDelete**](TopicApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidDelete) | **DELETE** /bcf/{version}/projects/{project_id}/topics/{topic_guid} | Deletes a single topic.
[**bcfVersionProjectsProjectIdTopicsTopicGuidGet**](TopicApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid} | Retrieve a specific topic.
[**bcfVersionProjectsProjectIdTopicsTopicGuidPut**](TopicApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{topic_guid} | Modify a specific topic
[**bcfVersionProjectsProjectIdTopicsTopicGuidSnippetGet**](TopicApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidSnippetGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/snippet | Retrieves a topics BIM-Snippet as binary file.
[**bcfVersionProjectsProjectIdTopicsTopicGuidSnippetPut**](TopicApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidSnippetPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/snippet | Puts a new BIM Snippet binary file to a topic


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

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidDelete"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidDelete**
> bcfVersionProjectsProjectIdTopicsTopicGuidDelete(version, projectId, topicGuid, )

Deletes a single topic.

Deletes a single topic. This operation is only possible when the server returns the delete flag in the Topic authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidDelete(version, projectId, topicGuid, , (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidGet**
> TopicGET bcfVersionProjectsProjectIdTopicsTopicGuidGet(version, projectId, topicGuid, )

Retrieve a specific topic.

Retrieve a specific topic.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidGet(version, projectId, topicGuid, , (error, data, response) => {
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

[**TopicGET**](TopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidPut"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidPut**
> TopicGET bcfVersionProjectsProjectIdTopicsTopicGuidPut(version, projectId, topicGuid, , opts)

Modify a specific topic

Modify a specific topic, description similar to POST. This operation is only possible when the server returns the update flag in the Topic authorization

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let opts = { 
  'topicPUT': new Bcfapi.TopicPUT() // TopicPUT | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidPut(version, projectId, topicGuid, , opts, (error, data, response) => {
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
 **topicPUT** | [**TopicPUT**](TopicPUT.md)|  | [optional] 

### Return type

[**TopicGET**](TopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidSnippetGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidSnippetGet**
> BimSnippet bcfVersionProjectsProjectIdTopicsTopicGuidSnippetGet(version, projectId, topicGuid, )

Retrieves a topics BIM-Snippet as binary file.

Retrieves a topics BIM-Snippet as binary file.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidSnippetGet(version, projectId, topicGuid, , (error, data, response) => {
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

[**BimSnippet**](BimSnippet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidSnippetPut"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidSnippetPut**
> bcfVersionProjectsProjectIdTopicsTopicGuidSnippetPut(version, projectId, topicGuid, )

Puts a new BIM Snippet binary file to a topic

Puts a new BIM Snippet binary file to a topic. If this is used, the parent topics BIM Snippet property is_external must be set to false and the reference must be the file name with extension. This operation is only possible when the server returns the updateBimSnippet flag in the Topic authorization. THERE IS NO BODY EXAMPLE!

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidSnippetPut(version, projectId, topicGuid, , (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

