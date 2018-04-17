# Swagger\Client\TopicApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsGet**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGet) | **GET** /bcf/{version}/projects/{project_id}/topics | Retrieve a collection of topics related to a project
[**bcfVersionProjectsProjectIdTopicsGuidDelete**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGuidDelete) | **DELETE** /bcf/{version}/projects/{project_id}/topics/{guid} | Deletes a single topic.
[**bcfVersionProjectsProjectIdTopicsGuidGet**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid} | Retrieve a specific topic.
[**bcfVersionProjectsProjectIdTopicsGuidPut**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGuidPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{guid} | Modify a specific topic
[**bcfVersionProjectsProjectIdTopicsGuidSnippetGet**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGuidSnippetGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/snippet | Retrieves a topics BIM-Snippet as binary file.
[**bcfVersionProjectsProjectIdTopicsGuidSnippetPut**](TopicApi.md#bcfVersionProjectsProjectIdTopicsGuidSnippetPut) | **PUT** /bcf/{version}/projects/{project_id}/topics/{guid}/snippet | Puts a new BIM Snippet binary file to a topic
[**bcfVersionProjectsProjectIdTopicsPost**](TopicApi.md#bcfVersionProjectsProjectIdTopicsPost) | **POST** /bcf/{version}/projects/{project_id}/topics | Add a new topic.


# **bcfVersionProjectsProjectIdTopicsGet**
> \Swagger\Client\Model\TopicGET[] bcfVersionProjectsProjectIdTopicsGet($version, $project_id)

Retrieve a collection of topics related to a project

Retrieve a collection of topics related to a project (default sort order is creation_date).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TopicApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGet($version, $project_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TopicApi->bcfVersionProjectsProjectIdTopicsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |

### Return type

[**\Swagger\Client\Model\TopicGET[]**](../Model/TopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidDelete**
> bcfVersionProjectsProjectIdTopicsGuidDelete($version, $project_id, $guid)

Deletes a single topic.

Deletes a single topic. This operation is only possible when the server returns the delete flag in the Topic authorization.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TopicApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$guid = "guid_example"; // string | Topic guid

try {
    $apiInstance->bcfVersionProjectsProjectIdTopicsGuidDelete($version, $project_id, $guid);
} catch (Exception $e) {
    echo 'Exception when calling TopicApi->bcfVersionProjectsProjectIdTopicsGuidDelete: ', $e->getMessage(), PHP_EOL;
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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidGet**
> \Swagger\Client\Model\TopicGET bcfVersionProjectsProjectIdTopicsGuidGet($version, $project_id, $guid)

Retrieve a specific topic.

Retrieve a specific topic.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TopicApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$guid = "guid_example"; // string | Topic guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidGet($version, $project_id, $guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TopicApi->bcfVersionProjectsProjectIdTopicsGuidGet: ', $e->getMessage(), PHP_EOL;
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

[**\Swagger\Client\Model\TopicGET**](../Model/TopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidPut**
> \Swagger\Client\Model\TopicGET bcfVersionProjectsProjectIdTopicsGuidPut($version, $project_id, $guid, $topic_put)

Modify a specific topic

Modify a specific topic, description similar to POST. This operation is only possible when the server returns the update flag in the Topic authorization

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TopicApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$guid = "guid_example"; // string | Topic guid
$topic_put = new \Swagger\Client\Model\TopicPUT(); // \Swagger\Client\Model\TopicPUT | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidPut($version, $project_id, $guid, $topic_put);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TopicApi->bcfVersionProjectsProjectIdTopicsGuidPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Topic guid |
 **topic_put** | [**\Swagger\Client\Model\TopicPUT**](../Model/TopicPUT.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\TopicGET**](../Model/TopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidSnippetGet**
> \Swagger\Client\Model\BimSnippet bcfVersionProjectsProjectIdTopicsGuidSnippetGet($version, $project_id, $guid)

Retrieves a topics BIM-Snippet as binary file.

Retrieves a topics BIM-Snippet as binary file.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TopicApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$guid = "guid_example"; // string | Topic guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidSnippetGet($version, $project_id, $guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TopicApi->bcfVersionProjectsProjectIdTopicsGuidSnippetGet: ', $e->getMessage(), PHP_EOL;
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

[**\Swagger\Client\Model\BimSnippet**](../Model/BimSnippet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidSnippetPut**
> bcfVersionProjectsProjectIdTopicsGuidSnippetPut($version, $project_id, $guid)

Puts a new BIM Snippet binary file to a topic

Puts a new BIM Snippet binary file to a topic. If this is used, the parent topics BIM Snippet property is_external must be set to false and the reference must be the file name with extension. This operation is only possible when the server returns the updateBimSnippet flag in the Topic authorization. THERE IS NO BODY EXAMPLE!

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TopicApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$guid = "guid_example"; // string | Topic guid

try {
    $apiInstance->bcfVersionProjectsProjectIdTopicsGuidSnippetPut($version, $project_id, $guid);
} catch (Exception $e) {
    echo 'Exception when calling TopicApi->bcfVersionProjectsProjectIdTopicsGuidSnippetPut: ', $e->getMessage(), PHP_EOL;
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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsPost**
> \Swagger\Client\Model\TopicGET bcfVersionProjectsProjectIdTopicsPost($version, $project_id, $topic_post)

Add a new topic.

Add a new topic. This operation is only possible when the server returns the createTopic flag in the Project authorization.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TopicApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_post = new \Swagger\Client\Model\TopicPOST(); // \Swagger\Client\Model\TopicPOST | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsPost($version, $project_id, $topic_post);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TopicApi->bcfVersionProjectsProjectIdTopicsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_post** | [**\Swagger\Client\Model\TopicPOST**](../Model/TopicPOST.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\TopicGET**](../Model/TopicGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

