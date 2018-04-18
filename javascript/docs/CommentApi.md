# Bcfapi.CommentApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidDelete**](CommentApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidDelete) | **DELETE** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/comments/{comment_guid} | Deletes a single comment.
[**bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidGet**](CommentApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/comments/{comment_guid} | Retrieve a collection of all comments related to a topic
[**bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidPut**](CommentApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/comments/{comment_guid} | Update a single comment
[**bcfVersionProjectsProjectIdTopicsTopicGuidCommentsGet**](CommentApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidCommentsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/comments | Retrieve a collection of all comments related to a topic
[**bcfVersionProjectsProjectIdTopicsTopicGuidCommentsPost**](CommentApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidCommentsPost) | **POST** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/comments | Add a new comment to a topic.


<a name="bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidDelete"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidDelete**
> bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidDelete(version, projectId, topicGuid, commentGuid)

Deletes a single comment.

Deletes a single comment. This operation is only possible when the server returns the delete flag in the Comment authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.CommentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let commentGuid = "commentGuid_example"; // String | Comment guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidDelete(version, projectId, topicGuid, commentGuid, (error, data, response) => {
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
 **commentGuid** | **String**| Comment guid | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidGet**
> CommentGET bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidGet(version, projectId, topicGuid, commentGuid)

Retrieve a collection of all comments related to a topic

Retrieve a collection of all comments related to a topic (default ordering is date).

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.CommentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let commentGuid = "commentGuid_example"; // String | Comment guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidGet(version, projectId, topicGuid, commentGuid, (error, data, response) => {
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

[**CommentGET**](CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidPut"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidPut**
> CommentGET bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidPut(version, projectId, topicGuid, commentGuid, opts)

Update a single comment

Update a single comment, description similar to POST. This operation is only possible when the server returns the update flag in the Comment authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.CommentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let commentGuid = "commentGuid_example"; // String | Comment guid

let opts = { 
  'commentPUT': new Bcfapi.CommentPUT() // CommentPUT | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidPut(version, projectId, topicGuid, commentGuid, opts, (error, data, response) => {
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
 **commentPUT** | [**CommentPUT**](CommentPUT.md)|  | [optional] 

### Return type

[**CommentGET**](CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidCommentsGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidCommentsGet**
> [CommentGET] bcfVersionProjectsProjectIdTopicsTopicGuidCommentsGet(version, projectId, topicGuid, )

Retrieve a collection of all comments related to a topic

Retrieve a collection of all comments related to a topic (default ordering is date).

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.CommentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidCommentsGet(version, projectId, topicGuid, , (error, data, response) => {
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

[**[CommentGET]**](CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidCommentsPost"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidCommentsPost**
> CommentGET bcfVersionProjectsProjectIdTopicsTopicGuidCommentsPost(version, projectId, topicGuid, , opts)

Add a new comment to a topic.

Add a new comment to a topic. This operation is only possible when the server returns the createComment flag in the Topic authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.CommentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let opts = { 
  'commentPOST': new Bcfapi.CommentPOST() // CommentPOST | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidCommentsPost(version, projectId, topicGuid, , opts, (error, data, response) => {
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
 **commentPOST** | [**CommentPOST**](CommentPOST.md)|  | [optional] 

### Return type

[**CommentGET**](CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

