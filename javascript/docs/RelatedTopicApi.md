# Bcfapi.RelatedTopicApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet**](RelatedTopicApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/related_topics | Retrieve a collection of all related topics to a topic.
[**bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut**](RelatedTopicApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/related_topics | Add or update a collection of all related topics to a topic.


<a name="bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet**
> [RelatedTopicGET] bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet(version, projectId, topicGuid, )

Retrieve a collection of all related topics to a topic.

Retrieve a collection of all related topics to a topic.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.RelatedTopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet(version, projectId, topicGuid, , (error, data, response) => {
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

[**[RelatedTopicGET]**](RelatedTopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut**
> [RelatedTopicGET] bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut(version, projectId, topicGuid, , opts)

Add or update a collection of all related topics to a topic.

Add or update a collection of all related topics to a topic. This operation is only possible when the server returns the updateRelatedTopics flag in the Topic authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.RelatedTopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let opts = { 
  'relatedTopicPUT': new Bcfapi.RelatedTopicGET() // RelatedTopicGET | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut(version, projectId, topicGuid, , opts, (error, data, response) => {
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
 **relatedTopicPUT** | [**RelatedTopicGET**](RelatedTopicGET.md)|  | [optional] 

### Return type

[**[RelatedTopicGET]**](RelatedTopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

