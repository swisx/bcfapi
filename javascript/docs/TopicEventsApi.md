# Bcfapi.TopicEventsApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsEventsGet**](TopicEventsApi.md#bcfVersionProjectsProjectIdTopicsEventsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/events | Retrieve a collection of topic events related to a project.
[**bcfVersionProjectsProjectIdTopicsTopicGuidEventsGet**](TopicEventsApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidEventsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/events | Retrieve a collection of topic events related to a project.


<a name="bcfVersionProjectsProjectIdTopicsEventsGet"></a>
# **bcfVersionProjectsProjectIdTopicsEventsGet**
> [TopicEventGET] bcfVersionProjectsProjectIdTopicsEventsGet(version, projectId, )

Retrieve a collection of topic events related to a project.

Retrieve a collection of topic events related to a project (default sort order is date).

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicEventsApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID


apiInstance.bcfVersionProjectsProjectIdTopicsEventsGet(version, projectId, , (error, data, response) => {
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

[**[TopicEventGET]**](TopicEventGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidEventsGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidEventsGet**
> [TopicEventGET] bcfVersionProjectsProjectIdTopicsTopicGuidEventsGet(version, projectId, topicGuid, )

Retrieve a collection of topic events related to a project.

Retrieve a collection of topic events related to a project (default sort order is date).

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.TopicEventsApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidEventsGet(version, projectId, topicGuid, , (error, data, response) => {
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

[**[TopicEventGET]**](TopicEventGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

