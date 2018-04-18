# Swagger\Client\TopicEventsApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsEventsGet**](TopicEventsApi.md#bcfVersionProjectsProjectIdTopicsEventsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/events | Retrieve a collection of topic events related to a project.
[**bcfVersionProjectsProjectIdTopicsTopicGuidEventsGet**](TopicEventsApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidEventsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/events | Retrieve a collection of topic events related to a project.


# **bcfVersionProjectsProjectIdTopicsEventsGet**
> \Swagger\Client\Model\TopicEventGET[] bcfVersionProjectsProjectIdTopicsEventsGet($version, $project_id)

Retrieve a collection of topic events related to a project.

Retrieve a collection of topic events related to a project (default sort order is date).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TopicEventsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsEventsGet($version, $project_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TopicEventsApi->bcfVersionProjectsProjectIdTopicsEventsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |

### Return type

[**\Swagger\Client\Model\TopicEventGET[]**](../Model/TopicEventGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidEventsGet**
> \Swagger\Client\Model\TopicEventGET[] bcfVersionProjectsProjectIdTopicsTopicGuidEventsGet($version, $project_id, $topic_guid)

Retrieve a collection of topic events related to a project.

Retrieve a collection of topic events related to a project (default sort order is date).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TopicEventsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidEventsGet($version, $project_id, $topic_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TopicEventsApi->bcfVersionProjectsProjectIdTopicsTopicGuidEventsGet: ', $e->getMessage(), PHP_EOL;
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

[**\Swagger\Client\Model\TopicEventGET[]**](../Model/TopicEventGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

