# Swagger\Client\RelatedTopicApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsGet**](RelatedTopicApi.md#bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/related_topics | Retrieve a collection of all related topics to a topic.
[**bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsPut**](RelatedTopicApi.md#bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{guid}/related_topics | Add or update a collection of all related topics to a topic.


# **bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsGet**
> \Swagger\Client\Model\RelatedTopicGET[] bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsGet($version, $project_id, $guid)

Retrieve a collection of all related topics to a topic.

Retrieve a collection of all related topics to a topic.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\RelatedTopicApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$guid = "guid_example"; // string | Topic guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsGet($version, $project_id, $guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelatedTopicApi->bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsGet: ', $e->getMessage(), PHP_EOL;
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

[**\Swagger\Client\Model\RelatedTopicGET[]**](../Model/RelatedTopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsPut**
> \Swagger\Client\Model\RelatedTopicGET[] bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsPut($version, $project_id, $guid, $related_topic_put)

Add or update a collection of all related topics to a topic.

Add or update a collection of all related topics to a topic. This operation is only possible when the server returns the updateRelatedTopics flag in the Topic authorization.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\RelatedTopicApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$guid = "guid_example"; // string | Topic guid
$related_topic_put = new \Swagger\Client\Model\RelatedTopicGET(); // \Swagger\Client\Model\RelatedTopicGET | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsPut($version, $project_id, $guid, $related_topic_put);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelatedTopicApi->bcfVersionProjectsProjectIdTopicsGuidRelatedTopicsPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Topic guid |
 **related_topic_put** | [**\Swagger\Client\Model\RelatedTopicGET**](../Model/RelatedTopicGET.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\RelatedTopicGET[]**](../Model/RelatedTopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

