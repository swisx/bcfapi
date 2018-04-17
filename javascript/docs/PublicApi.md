# Bcfapi.PublicApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionAuthGet**](PublicApi.md#bcfVersionAuthGet) | **GET** /bcf/{version}/auth | 
[**bcfVersionCurrentUserGet**](PublicApi.md#bcfVersionCurrentUserGet) | **GET** /bcf/{version}/current-user | Get current user
[**bcfVersionsGet**](PublicApi.md#bcfVersionsGet) | **GET** /bcf/versions | List of versions


<a name="bcfVersionAuthGet"></a>
# **bcfVersionAuthGet**
> [AuthGET] bcfVersionAuthGet(version, )



Obtaining Authentication Information

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.PublicApi();

let version = "version_example"; // String | BFC Version


apiInstance.bcfVersionAuthGet(version, , (error, data, response) => {
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

[**[AuthGET]**](AuthGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionCurrentUserGet"></a>
# **bcfVersionCurrentUserGet**
> UserGET bcfVersionCurrentUserGet(version, )

Get current user

Get current user

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.PublicApi();

let version = "version_example"; // String | BFC Version


apiInstance.bcfVersionCurrentUserGet(version, , (error, data, response) => {
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

[**UserGET**](UserGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bcfVersionsGet"></a>
# **bcfVersionsGet**
> [VersionsGET] bcfVersionsGet()

List of versions

Returns a list of all supported BCF API versions of the server.

### Example
```javascript
import Bcfapi from 'bcfapi';

let apiInstance = new Bcfapi.PublicApi();

apiInstance.bcfVersionsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[VersionsGET]**](VersionsGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

