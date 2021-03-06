# Swagger\Client\FileApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsTopicGuidFilesGet**](FileApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidFilesGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/files | Retrieve a collection of file references as topic header.
[**bcfVersionProjectsProjectIdTopicsTopicGuidFilesPut**](FileApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidFilesPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/files | Update a collection of file references on the topic header.


# **bcfVersionProjectsProjectIdTopicsTopicGuidFilesGet**
> \Swagger\Client\Model\FileGET[] bcfVersionProjectsProjectIdTopicsTopicGuidFilesGet($version, $project_id, $topic_guid)

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
$topic_guid = "topic_guid_example"; // string | Topic guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidFilesGet($version, $project_id, $topic_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FileApi->bcfVersionProjectsProjectIdTopicsTopicGuidFilesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |

### Return type

[**\Swagger\Client\Model\FileGET[]**](../Model/FileGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidFilesPut**
> \Swagger\Client\Model\FileGET bcfVersionProjectsProjectIdTopicsTopicGuidFilesPut($version, $project_id, $topic_guid, $file_put)

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
$topic_guid = "topic_guid_example"; // string | Topic guid
$file_put = new \Swagger\Client\Model\FilePUT(); // \Swagger\Client\Model\FilePUT | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidFilesPut($version, $project_id, $topic_guid, $file_put);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FileApi->bcfVersionProjectsProjectIdTopicsTopicGuidFilesPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |
 **file_put** | [**\Swagger\Client\Model\FilePUT**](../Model/FilePUT.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\FileGET**](../Model/FileGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

