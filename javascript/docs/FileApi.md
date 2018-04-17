# Bcfapi.FileApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsGuidFilesGet**](FileApi.md#bcfVersionProjectsProjectIdTopicsGuidFilesGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/files | Retrieve a collection of file references as topic header.
[**bcfVersionProjectsProjectIdTopicsGuidFilesPut**](FileApi.md#bcfVersionProjectsProjectIdTopicsGuidFilesPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{guid}/files | Update a collection of file references on the topic header.


<a name="bcfVersionProjectsProjectIdTopicsGuidFilesGet"></a>
# **bcfVersionProjectsProjectIdTopicsGuidFilesGet**
> [FileGET] bcfVersionProjectsProjectIdTopicsGuidFilesGet(version, projectId, guid)

Retrieve a collection of file references as topic header.

Retrieve a collection of file references as topic header.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.FileApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidFilesGet(version, projectId, guid, (error, data, response) => {
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

[**[FileGET]**](FileGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidFilesPut"></a>
# **bcfVersionProjectsProjectIdTopicsGuidFilesPut**
> FileGET bcfVersionProjectsProjectIdTopicsGuidFilesPut(version, projectId, guid, opts)

Update a collection of file references on the topic header.

Update a collection of file references on the topic header. This operation is only possible when the server returns the updateFiles flag in the Topic authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.FileApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid

let opts = { 
  'filePUT': new Bcfapi.FilePUT() // FilePUT | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsGuidFilesPut(version, projectId, guid, opts, (error, data, response) => {
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
 **filePUT** | [**FilePUT**](FilePUT.md)|  | [optional] 

### Return type

[**FileGET**](FileGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

