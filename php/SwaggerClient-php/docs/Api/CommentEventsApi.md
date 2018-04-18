# Swagger\Client\CommentEventsApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsCommentsEventsGet**](CommentEventsApi.md#bcfVersionProjectsProjectIdTopicsCommentsEventsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/comments/events | RRetrieve a collection of comment events related to a project.
[**bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidEventsGet**](CommentEventsApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidEventsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/comments/{comment_guid}/events | RRetrieve a collection of comment events related to a project.


# **bcfVersionProjectsProjectIdTopicsCommentsEventsGet**
> \Swagger\Client\Model\CommentEventGET[] bcfVersionProjectsProjectIdTopicsCommentsEventsGet($version, $project_id)

RRetrieve a collection of comment events related to a project.

Retrieve a collection of comment events related to a project (default sort order is date).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CommentEventsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsCommentsEventsGet($version, $project_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CommentEventsApi->bcfVersionProjectsProjectIdTopicsCommentsEventsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |

### Return type

[**\Swagger\Client\Model\CommentEventGET[]**](../Model/CommentEventGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidEventsGet**
> \Swagger\Client\Model\CommentEventGET[] bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidEventsGet($version, $project_id, $topic_guid, $comment_guid)

RRetrieve a collection of comment events related to a project.

Retrieve a collection of comment events related to a project (default sort order is date).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CommentEventsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$comment_guid = "comment_guid_example"; // string | Comment guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidEventsGet($version, $project_id, $topic_guid, $comment_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CommentEventsApi->bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidEventsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |
 **comment_guid** | **string**| Comment guid |

### Return type

[**\Swagger\Client\Model\CommentEventGET[]**](../Model/CommentEventGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

