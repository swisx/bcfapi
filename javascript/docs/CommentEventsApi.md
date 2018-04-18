# Bcfapi.CommentEventsApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsCommentsEventsGet**](CommentEventsApi.md#bcfVersionProjectsProjectIdTopicsCommentsEventsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/comments/events | RRetrieve a collection of comment events related to a project.
[**bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidEventsGet**](CommentEventsApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidEventsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/comments/{comment_guid}/events | RRetrieve a collection of comment events related to a project.


<a name="bcfVersionProjectsProjectIdTopicsCommentsEventsGet"></a>
# **bcfVersionProjectsProjectIdTopicsCommentsEventsGet**
> [CommentEventGET] bcfVersionProjectsProjectIdTopicsCommentsEventsGet(version, projectId, )

RRetrieve a collection of comment events related to a project.

Retrieve a collection of comment events related to a project (default sort order is date).

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.CommentEventsApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID


apiInstance.bcfVersionProjectsProjectIdTopicsCommentsEventsGet(version, projectId, , (error, data, response) => {
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

[**[CommentEventGET]**](CommentEventGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidEventsGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidEventsGet**
> [CommentEventGET] bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidEventsGet(version, projectId, topicGuid, commentGuid)

RRetrieve a collection of comment events related to a project.

Retrieve a collection of comment events related to a project (default sort order is date).

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.CommentEventsApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let commentGuid = "commentGuid_example"; // String | Comment guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidEventsGet(version, projectId, topicGuid, commentGuid, (error, data, response) => {
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
 **commentGuid** | **String**| Comment guid | 

### Return type

[**[CommentEventGET]**](CommentEventGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

