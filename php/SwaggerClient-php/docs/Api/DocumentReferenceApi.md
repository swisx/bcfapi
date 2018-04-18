# Swagger\Client\DocumentReferenceApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesGet**](DocumentReferenceApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/document_references | Retrieve a collection of all document references to a topic.
[**bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesPost**](DocumentReferenceApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesPost) | **POST** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/document_references | Retrieve a collection of all document references to a topic.


# **bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesGet**
> \Swagger\Client\Model\DocumentReferenceGET[] bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesGet($version, $project_id, $topic_guid)

Retrieve a collection of all document references to a topic.

Retrieve a collection of all document references to a topic.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DocumentReferenceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesGet($version, $project_id, $topic_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentReferenceApi->bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesGet: ', $e->getMessage(), PHP_EOL;
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

[**\Swagger\Client\Model\DocumentReferenceGET[]**](../Model/DocumentReferenceGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesPost**
> \Swagger\Client\Model\DocumentReferenceGET[] bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesPost($version, $project_id, $topic_guid, $document_reference_post)

Retrieve a collection of all document references to a topic.

Retrieve a collection of all document references to a topic.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DocumentReferenceApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$document_reference_post = new \Swagger\Client\Model\DocumentReferencePOST(); // \Swagger\Client\Model\DocumentReferencePOST | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesPost($version, $project_id, $topic_guid, $document_reference_post);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentReferenceApi->bcfVersionProjectsProjectIdTopicsTopicGuidDocumentReferencesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |
 **document_reference_post** | [**\Swagger\Client\Model\DocumentReferencePOST**](../Model/DocumentReferencePOST.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\DocumentReferenceGET[]**](../Model/DocumentReferenceGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

