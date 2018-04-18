# Swagger\Client\RelatedTopicApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet**](RelatedTopicApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/related_topics | Retrieve a collection of all related topics to a topic.
[**bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut**](RelatedTopicApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/related_topics | Add or update a collection of all related topics to a topic.


# **bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet**
> \Swagger\Client\Model\RelatedTopicGET[] bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet($version, $project_id, $topic_guid)

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
$topic_guid = "topic_guid_example"; // string | Topic guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet($version, $project_id, $topic_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelatedTopicApi->bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsGet: ', $e->getMessage(), PHP_EOL;
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

[**\Swagger\Client\Model\RelatedTopicGET[]**](../Model/RelatedTopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut**
> \Swagger\Client\Model\RelatedTopicGET[] bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut($version, $project_id, $topic_guid, $related_topic_put)

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
$topic_guid = "topic_guid_example"; // string | Topic guid
$related_topic_put = new \Swagger\Client\Model\RelatedTopicGET(); // \Swagger\Client\Model\RelatedTopicGET | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut($version, $project_id, $topic_guid, $related_topic_put);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelatedTopicApi->bcfVersionProjectsProjectIdTopicsTopicGuidRelatedTopicsPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |
 **related_topic_put** | [**\Swagger\Client\Model\RelatedTopicGET**](../Model/RelatedTopicGET.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\RelatedTopicGET[]**](../Model/RelatedTopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

