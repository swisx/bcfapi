# Swagger\Client\FileApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsGuidFilesGet**](FileApi.md#bcfVersionProjectsProjectIdTopicsGuidFilesGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/files | Retrieve a collection of file references as topic header.
[**bcfVersionProjectsProjectIdTopicsGuidFilesPut**](FileApi.md#bcfVersionProjectsProjectIdTopicsGuidFilesPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{guid}/files | Update a collection of file references on the topic header.


# **bcfVersionProjectsProjectIdTopicsGuidFilesGet**
> \Swagger\Client\Model\FileGET[] bcfVersionProjectsProjectIdTopicsGuidFilesGet($version, $project_id, $guid)

Retrieve a collection of file references as topic header.

Retrieve a collection of file references as topic header.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\FileApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$guid = "guid_example"; // string | Topic guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidFilesGet($version, $project_id, $guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FileApi->bcfVersionProjectsProjectIdTopicsGuidFilesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Topic guid |

### Return type

[**\Swagger\Client\Model\FileGET[]**](../Model/FileGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidFilesPut**
> \Swagger\Client\Model\FileGET bcfVersionProjectsProjectIdTopicsGuidFilesPut($version, $project_id, $guid, $file_put)

Update a collection of file references on the topic header.

Update a collection of file references on the topic header. This operation is only possible when the server returns the updateFiles flag in the Topic authorization.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\FileApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$guid = "guid_example"; // string | Topic guid
$file_put = new \Swagger\Client\Model\FilePUT(); // \Swagger\Client\Model\FilePUT | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidFilesPut($version, $project_id, $guid, $file_put);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FileApi->bcfVersionProjectsProjectIdTopicsGuidFilesPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Topic guid |
 **file_put** | [**\Swagger\Client\Model\FilePUT**](../Model/FilePUT.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\FileGET**](../Model/FileGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

