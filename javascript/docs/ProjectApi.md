# Bcfapi.ProjectApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsGet**](ProjectApi.md#bcfVersionProjectsGet) | **GET** /bcf/{version}/projects | Collection of projects
[**bcfVersionProjectsProjectIdExtensionsGet**](ProjectApi.md#bcfVersionProjectsProjectIdExtensionsGet) | **GET** /bcf/{version}/projects/{project_id}/extensions | 
[**bcfVersionProjectsProjectIdGet**](ProjectApi.md#bcfVersionProjectsProjectIdGet) | **GET** /bcf/{version}/projects/{project_id} | 
[**bcfVersionProjectsProjectIdPut**](ProjectApi.md#bcfVersionProjectsProjectIdPut) | **PUT** /bcf/{version}/projects/{project_id} | Update Project Name


<a name="bcfVersionProjectsGet"></a>
# **bcfVersionProjectsGet**
> [ProjectGET] bcfVersionProjectsGet(version, )

Collection of projects

Retrieve a collection of projects where the currently logged on user has access to.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ProjectApi();

let version = "version_example"; // String | BFC Version


apiInstance.bcfVersionProjectsGet(version, , (error, data, response) => {
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

### Return type

[**[ProjectGET]**](ProjectGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdExtensionsGet"></a>
# **bcfVersionProjectsProjectIdExtensionsGet**
> ProjectGET bcfVersionProjectsProjectIdExtensionsGet(version, projectId, )



Retrieve a specific project.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ProjectApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID


apiInstance.bcfVersionProjectsProjectIdExtensionsGet(version, projectId, , (error, data, response) => {
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

[**ProjectGET**](ProjectGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdGet"></a>
# **bcfVersionProjectsProjectIdGet**
> ProjectGET bcfVersionProjectsProjectIdGet(version, projectId, )



Retrieve a specific project.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ProjectApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID


apiInstance.bcfVersionProjectsProjectIdGet(version, projectId, , (error, data, response) => {
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

[**ProjectGET**](ProjectGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionProjectsProjectIdPut"></a>
# **bcfVersionProjectsProjectIdPut**
> ProjectGET bcfVersionProjectsProjectIdPut(version, projectId, , opts)

Update Project Name

Modify a specific project. This operation is only possible when the server returns the update flag in the Project authorization,

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.ProjectApi();

let version = "version_example"; // String | BFC Version

let projectId = "projectId_example"; // String | Project ID

let opts = { 
  'body': new Bcfapi.Body() // Body | Update name
};

apiInstance.bcfVersionProjectsProjectIdPut(version, projectId, , opts, (error, data, response) => {
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
 **body** | [**Body**](Body.md)| Update name | [optional] 

### Return type

[**ProjectGET**](ProjectGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

