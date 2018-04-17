# Swagger\Client\CommentApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsGuidCommentsGet**](CommentApi.md#bcfVersionProjectsProjectIdTopicsGuidCommentsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/comments | Retrieve a collection of all comments related to a topic
[**bcfVersionProjectsProjectIdTopicsGuidCommentsGuidDelete**](CommentApi.md#bcfVersionProjectsProjectIdTopicsGuidCommentsGuidDelete) | **DELETE** /bcf/{version}/projects/{project_id}/topics/{guid}/comments/{guid} | Deletes a single comment.
[**bcfVersionProjectsProjectIdTopicsGuidCommentsGuidGet**](CommentApi.md#bcfVersionProjectsProjectIdTopicsGuidCommentsGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/comments/{guid} | Retrieve a collection of all comments related to a topic
[**bcfVersionProjectsProjectIdTopicsGuidCommentsGuidPut**](CommentApi.md#bcfVersionProjectsProjectIdTopicsGuidCommentsGuidPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{guid}/comments/{guid} | Update a single comment
[**bcfVersionProjectsProjectIdTopicsGuidCommentsPost**](CommentApi.md#bcfVersionProjectsProjectIdTopicsGuidCommentsPost) | **POST** /bcf/{version}/projects/{project_id}/topics/{guid}/comments | Add a new comment to a topic.


# **bcfVersionProjectsProjectIdTopicsGuidCommentsGet**
> \Swagger\Client\Model\CommentGET[] bcfVersionProjectsProjectIdTopicsGuidCommentsGet($version, $project_id, $guid)

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
$guid = "guid_example"; // string | Topic guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidCommentsGet($version, $project_id, $guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CommentApi->bcfVersionProjectsProjectIdTopicsGuidCommentsGet: ', $e->getMessage(), PHP_EOL;
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

[**\Swagger\Client\Model\CommentGET[]**](../Model/CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidCommentsGuidDelete**
> bcfVersionProjectsProjectIdTopicsGuidCommentsGuidDelete($version, $project_id, $guid)

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
$guid = "guid_example"; // string | Comment guid

try {
    $apiInstance->bcfVersionProjectsProjectIdTopicsGuidCommentsGuidDelete($version, $project_id, $guid);
} catch (Exception $e) {
    echo 'Exception when calling CommentApi->bcfVersionProjectsProjectIdTopicsGuidCommentsGuidDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Comment guid |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidCommentsGuidGet**
> \Swagger\Client\Model\CommentGET bcfVersionProjectsProjectIdTopicsGuidCommentsGuidGet($version, $project_id, $guid)

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
$guid = "guid_example"; // string | Comment guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidCommentsGuidGet($version, $project_id, $guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CommentApi->bcfVersionProjectsProjectIdTopicsGuidCommentsGuidGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Comment guid |

### Return type

[**\Swagger\Client\Model\CommentGET**](../Model/CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidCommentsGuidPut**
> \Swagger\Client\Model\CommentGET bcfVersionProjectsProjectIdTopicsGuidCommentsGuidPut($version, $project_id, $guid, $comment_put)

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
$guid = "guid_example"; // string | Comment guid
$comment_put = new \Swagger\Client\Model\CommentPUT(); // \Swagger\Client\Model\CommentPUT | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidCommentsGuidPut($version, $project_id, $guid, $comment_put);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CommentApi->bcfVersionProjectsProjectIdTopicsGuidCommentsGuidPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Comment guid |
 **comment_put** | [**\Swagger\Client\Model\CommentPUT**](../Model/CommentPUT.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\CommentGET**](../Model/CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidCommentsPost**
> \Swagger\Client\Model\CommentGET bcfVersionProjectsProjectIdTopicsGuidCommentsPost($version, $project_id, $guid, $comment_post)

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
$guid = "guid_example"; // string | Topic guid
$comment_post = new \Swagger\Client\Model\CommentPOST(); // \Swagger\Client\Model\CommentPOST | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidCommentsPost($version, $project_id, $guid, $comment_post);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CommentApi->bcfVersionProjectsProjectIdTopicsGuidCommentsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Topic guid |
 **comment_post** | [**\Swagger\Client\Model\CommentPOST**](../Model/CommentPOST.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\CommentGET**](../Model/CommentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

