# Swagger\Client\CommentApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidDelete**](CommentApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidDelete) | **DELETE** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/comments/{comment_guid} | Deletes a single comment.
[**bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidGet**](CommentApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/comments/{comment_guid} | Retrieve a collection of all comments related to a topic
[**bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidPut**](CommentApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/comments/{comment_guid} | Update a single comment
[**bcfVersionProjectsProjectIdTopicsTopicGuidCommentsGet**](CommentApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidCommentsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/comments | Retrieve a collection of all comments related to a topic
[**bcfVersionProjectsProjectIdTopicsTopicGuidCommentsPost**](CommentApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidCommentsPost) | **POST** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/comments | Add a new comment to a topic.


# **bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidDelete**
> bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidDelete($version, $project_id, $topic_guid, $comment_guid)

Deletes a single comment.

Deletes a single comment. This operation is only possible when the server returns the delete flag in the Comment authorization.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CommentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$comment_guid = "comment_guid_example"; // string | Comment guid

try {
    $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidDelete($version, $project_id, $topic_guid, $comment_guid);
} catch (Exception $e) {
    echo 'Exception when calling CommentApi->bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidDelete: ', $e->getMessage(), PHP_EOL;
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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidGet**
> \Swagger\Client\Model\CommentGET bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidGet($version, $project_id, $topic_guid, $comment_guid)

Retrieve a collection of all comments related to a topic

Retrieve a collection of all comments related to a topic (default ordering is date).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CommentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$comment_guid = "comment_guid_example"; // string | Comment guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidGet($version, $project_id, $topic_guid, $comment_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CommentApi->bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidGet: ', $e->getMessage(), PHP_EOL;
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

[**\Swagger\Client\Model\CommentGET**](../Model/CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidPut**
> \Swagger\Client\Model\CommentGET bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidPut($version, $project_id, $topic_guid, $comment_guid, $comment_put)

Update a single comment

Update a single comment, description similar to POST. This operation is only possible when the server returns the update flag in the Comment authorization.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CommentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$comment_guid = "comment_guid_example"; // string | Comment guid
$comment_put = new \Swagger\Client\Model\CommentPUT(); // \Swagger\Client\Model\CommentPUT | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidPut($version, $project_id, $topic_guid, $comment_guid, $comment_put);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CommentApi->bcfVersionProjectsProjectIdTopicsTopicGuidCommentsCommentGuidPut: ', $e->getMessage(), PHP_EOL;
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
 **comment_put** | [**\Swagger\Client\Model\CommentPUT**](../Model/CommentPUT.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\CommentGET**](../Model/CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidCommentsGet**
> \Swagger\Client\Model\CommentGET[] bcfVersionProjectsProjectIdTopicsTopicGuidCommentsGet($version, $project_id, $topic_guid)

Retrieve a collection of all comments related to a topic

Retrieve a collection of all comments related to a topic (default ordering is date).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CommentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidCommentsGet($version, $project_id, $topic_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CommentApi->bcfVersionProjectsProjectIdTopicsTopicGuidCommentsGet: ', $e->getMessage(), PHP_EOL;
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

[**\Swagger\Client\Model\CommentGET[]**](../Model/CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidCommentsPost**
> \Swagger\Client\Model\CommentGET bcfVersionProjectsProjectIdTopicsTopicGuidCommentsPost($version, $project_id, $topic_guid, $comment_post)

Add a new comment to a topic.

Add a new comment to a topic. This operation is only possible when the server returns the createComment flag in the Topic authorization.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CommentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$comment_post = new \Swagger\Client\Model\CommentPOST(); // \Swagger\Client\Model\CommentPOST | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidCommentsPost($version, $project_id, $topic_guid, $comment_post);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CommentApi->bcfVersionProjectsProjectIdTopicsTopicGuidCommentsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |
 **comment_post** | [**\Swagger\Client\Model\CommentPOST**](../Model/CommentPOST.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\CommentGET**](../Model/CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

