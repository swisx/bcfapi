# Bcfapi.DocumentReferenceApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsGuidDocumentReferencesGet**](DocumentReferenceApi.md#bcfVersionProjectsProjectIdTopicsGuidDocumentReferencesGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/document_references | Retrieve a collection of all document references to a topic.
[**bcfVersionProjectsProjectIdTopicsGuidDocumentReferencesPost**](DocumentReferenceApi.md#bcfVersionProjectsProjectIdTopicsGuidDocumentReferencesPost) | **POST** /bcf/{version}/projects/{project_id}/topics/{guid}/document_references | Retrieve a collection of all document references to a topic.


<a name="bcfVersionProjectsProjectIdTopicsGuidDocumentReferencesGet"></a>
# **bcfVersionProjectsProjectIdTopicsGuidDocumentReferencesGet**
> [DocumentReferenceGET] bcfVersionProjectsProjectIdTopicsGuidDocumentReferencesGet(version, projectId, guid)

Retrieve a collection of all document references to a topic.

Retrieve a collection of all document references to a topic.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.DocumentReferenceApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid


apiInstance.bcfVersionProjectsProjectIdTopicsGuidDocumentReferencesGet(version, projectId, guid, (error, data, response) => {
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

[**[DocumentReferenceGET]**](DocumentReferenceGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdTopicsGuidDocumentReferencesPost"></a>
# **bcfVersionProjectsProjectIdTopicsGuidDocumentReferencesPost**
> [DocumentReferenceGET] bcfVersionProjectsProjectIdTopicsGuidDocumentReferencesPost(version, projectId, guid, opts)

Retrieve a collection of all document references to a topic.

Retrieve a collection of all document references to a topic.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.DocumentReferenceApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let guid = "guid_example"; // String | Topic guid

let opts = { 
  'documentReferencePOST': new Bcfapi.DocumentReferencePOST() // DocumentReferencePOST | 
};

apiInstance.bcfVersionProjectsProjectIdTopicsGuidDocumentReferencesPost(version, projectId, guid, opts, (error, data, response) => {
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
 **documentReferencePOST** | [**DocumentReferencePOST**](DocumentReferencePOST.md)|  | [optional] 

### Return type

[**[DocumentReferenceGET]**](DocumentReferenceGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

