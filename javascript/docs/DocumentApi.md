# Bcfapi.DocumentApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdDocumentsDocumentGuidGet**](DocumentApi.md#bcfVersionProjectsProjectIdDocumentsDocumentGuidGet) | **GET** /bcf/{version}/projects/{project_id}/documents/{document_guid} | Retrieves a document as binary file.
[**bcfVersionProjectsProjectIdDocumentsGet**](DocumentApi.md#bcfVersionProjectsProjectIdDocumentsGet) | **GET** /bcf/{version}/projects/{project_id}/documents | Retrieve a collection of all documents uploaded to a project.
[**bcfVersionProjectsProjectIdDocumentsPost**](DocumentApi.md#bcfVersionProjectsProjectIdDocumentsPost) | **POST** /bcf/{version}/projects/{project_id}/documents | Upload a document (binary file) to a project.


<a name="bcfVersionProjectsProjectIdDocumentsDocumentGuidGet"></a>
# **bcfVersionProjectsProjectIdDocumentsDocumentGuidGet**
> DocumentGET bcfVersionProjectsProjectIdDocumentsDocumentGuidGet(version, projectId, documentGuid)

Retrieves a document as binary file.

Retrieves a document as binary file.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.DocumentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let documentGuid = "documentGuid_example"; // String | Document guid


apiInstance.bcfVersionProjectsProjectIdDocumentsDocumentGuidGet(version, projectId, documentGuid, (error, data, response) => {
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
 **documentGuid** | **String**| Document guid | 

### Return type

[**DocumentGET**](DocumentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdDocumentsGet"></a>
# **bcfVersionProjectsProjectIdDocumentsGet**
> [DocumentGET] bcfVersionProjectsProjectIdDocumentsGet(version, projectId, )

Retrieve a collection of all documents uploaded to a project.

Retrieve a collection of all documents uploaded to a project.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.DocumentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID


apiInstance.bcfVersionProjectsProjectIdDocumentsGet(version, projectId, , (error, data, response) => {
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

[**[DocumentGET]**](DocumentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdDocumentsPost"></a>
# **bcfVersionProjectsProjectIdDocumentsPost**
> [DocumentGET] bcfVersionProjectsProjectIdDocumentsPost(version, projectId, )

Upload a document (binary file) to a project.

Upload a document (binary file) to a project. This operation is only possible when the server returns the createDocument flag in the Project authorization.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.DocumentApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID


apiInstance.bcfVersionProjectsProjectIdDocumentsPost(version, projectId, , (error, data, response) => {
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

[**[DocumentGET]**](DocumentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

