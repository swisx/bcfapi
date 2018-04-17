# Bcfapi.RelatedTopicApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsGet**](RelatedTopicApi.md#bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/related_topics | Retrieve a collection of all related topics to a topic.
[**bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsPut**](RelatedTopicApi.md#bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{guid}/related_topics | Add or update a collection of all related topics to a topic.


<a name="bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsGet"></a>
# **bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsGet**
> [RelatedTopicGET] bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsGet(version, projectId, guid)

Retrieve a collection of all related topics to a topic.

Retrieve a collection of all related topics to a topic.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.RelatedTopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsGet(version, projectId, guid, (error, data, response) => {
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

[**[RelatedTopicGET]**](RelatedTopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsPut"></a>
# **bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsPut**
> [RelatedTopicGET] bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsPut(version, projectId, guid, opts)

Add or update a collection of all related topics to a topic.

Add or update a collection of all related topics to a topic. This operation is only possible when the server returns the updateRelatedTopics flag in the Topic authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.RelatedTopicApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid

let opts = { 
  'relatedTopicPUT': new Bcfapi.RelatedTopicGET() // RelatedTopicGET | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsPut(version, projectId, guid, opts, (error, data, response) => {
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
 **relatedTopicPUT** | [**RelatedTopicGET**](RelatedTopicGET.md)|  | [optional] 

### Return type

[**[RelatedTopicGET]**](RelatedTopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

