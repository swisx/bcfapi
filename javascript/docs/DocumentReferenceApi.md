# Bcfapi.DocumentReferenceApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesGet**](DocumentReferenceApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/document_references | Retrieve a collection of all document references to a topic.
[**bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesPost**](DocumentReferenceApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesPost) | **POST** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/document_references | Retrieve a collection of all document references to a topic.


<a name="bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesGet**
> [DocumentReferenceGET] bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesGet(version, projectId, topicGuid, )

Retrieve a collection of all document references to a topic.

Retrieve a collection of all document references to a topic.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.DocumentReferenceApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesGet(version, projectId, topicGuid, , (error, data, response) => {
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

[**[DocumentReferenceGET]**](DocumentReferenceGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesPost"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesPost**
> [DocumentReferenceGET] bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesPost(version, projectId, topicGuid, , opts)

Retrieve a collection of all document references to a topic.

Retrieve a collection of all document references to a topic.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.DocumentReferenceApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let opts = { 
  'documentReferencePOST': new Bcfapi.DocumentReferencePOST() // DocumentReferencePOST | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesPost(version, projectId, topicGuid, , opts, (error, data, response) => {
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
 **documentReferencePOST** | [**DocumentReferencePOST**](DocumentReferencePOST.md)|  | [optional] 

### Return type

[**[DocumentReferenceGET]**](DocumentReferenceGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

