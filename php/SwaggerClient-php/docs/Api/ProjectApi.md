# Swagger\Client\ProjectApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsGet**](ProjectApi.md#bcfVersionProjectsGet) | **GET** /bcf/{version}/projects | Collection of projects
[**bcfVersionProjectsProjectIdExtensionsGet**](ProjectApi.md#bcfVersionProjectsProjectIdExtensionsGet) | **GET** /bcf/{version}/projects/{project_id}/extensions | 
[**bcfVersionProjectsProjectIdGet**](ProjectApi.md#bcfVersionProjectsProjectIdGet) | **GET** /bcf/{version}/projects/{project_id} | 
[**bcfVersionProjectsProjectIdPut**](ProjectApi.md#bcfVersionProjectsProjectIdPut) | **PUT** /bcf/{version}/projects/{project_id} | Update Project Name


# **bcfVersionProjectsGet**
> \Swagger\Client\Model\ProjectGET[] bcfVersionProjectsGet($version)

Collection of projects

Retrieve a collection of projects where the currently logged on user has access to.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProjectApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version

try {
    $result = $apiInstance->bcfVersionProjectsGet($version);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProjectApi->bcfVersionProjectsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |

### Return type

[**\Swagger\Client\Model\ProjectGET[]**](../Model/ProjectGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdExtensionsGet**
> \Swagger\Client\Model\ProjectGET bcfVersionProjectsProjectIdExtensionsGet($version, $project_id)



Retrieve a specific project.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProjectApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdExtensionsGet($version, $project_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProjectApi->bcfVersionProjectsProjectIdExtensionsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |

### Return type

[**\Swagger\Client\Model\ProjectGET**](../Model/ProjectGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdGet**
> \Swagger\Client\Model\ProjectGET bcfVersionProjectsProjectIdGet($version, $project_id)



Retrieve a specific project.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProjectApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdGet($version, $project_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProjectApi->bcfVersionProjectsProjectIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |

### Return type

[**\Swagger\Client\Model\ProjectGET**](../Model/ProjectGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdPut**
> \Swagger\Client\Model\ProjectGET bcfVersionProjectsProjectIdPut($version, $project_id, $body)

Update Project Name

Modify a specific project. This operation is only possible when the server returns the update flag in the Project authorization,

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ProjectApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$body = new \Swagger\Client\Model\Body(); // \Swagger\Client\Model\Body | Update name

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdPut($version, $project_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProjectApi->bcfVersionProjectsProjectIdPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **body** | [**\Swagger\Client\Model\Body**](../Model/Body.md)| Update name | [optional]

### Return type

[**\Swagger\Client\Model\ProjectGET**](../Model/ProjectGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

