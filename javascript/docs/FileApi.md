# Bcfapi.FileApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsTopicGuidFilesGet**](FileApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidFilesGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/files | Retrieve a collection of file references as topic header.
[**bcfVersionProjectsProjectIdTopicsTopicGuidFilesPut**](FileApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidFilesPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/files | Update a collection of file references on the topic header.


<a name="bcfVersionProjectsProjectIdTopicsTopicGuidFilesGet"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidFilesGet**
> [FileGET] bcfVersionProjectsProjectIdTopicsTopicGuidFilesGet(version, projectId, topicGuid, )

Retrieve a collection of file references as topic header.

Retrieve a collection of file references as topic header.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.FileApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidFilesGet(version, projectId, topicGuid, , (error, data, response) => {
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

[**[FileGET]**](FileGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsTopicGuidFilesPut"></a>
# **bcfVersionProjectsProjectIdTopicsTopicGuidFilesPut**
> FileGET bcfVersionProjectsProjectIdTopicsTopicGuidFilesPut(version, projectId, topicGuid, , opts)

Update a collection of file references on the topic header.

Update a collection of file references on the topic header. This operation is only possible when the server returns the updateFiles flag in the Topic authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.FileApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let topicGuid = "topicGuid_example"; // String | Topic guid

let opts = { 
  'filePUT': new Bcfapi.FilePUT() // FilePUT | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsTopicGuidFilesPut(version, projectId, topicGuid, , opts, (error, data, response) => {
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
 **filePUT** | [**FilePUT**](FilePUT.md)|  | [optional] 

### Return type

[**FileGET**](FileGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

