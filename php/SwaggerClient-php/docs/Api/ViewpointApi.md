# Swagger\Client\ViewpointApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints | Retrieve a collection of all viewpoints related to a topic.
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsPost**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsPost) | **POST** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints | Add a new viewpoint.
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidBitmapsBitmapGuidGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidBitmapsBitmapGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints/{viewpoint_guid}/bitmaps/{bitmap_guid} | Retrieve a specific viewpoints bitmap image file (png or jpg).
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidColoringGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidColoringGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints/{viewpoint_guid}/coloring | Retrieve a collection of all colored components in a viewpoint.
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints/{viewpoint_guid} | Retrieve a collection of all viewpoints related to a topic.
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSelectionGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSelectionGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints/{viewpoint_guid}/selection | Retrieve a collection of all selected components in a viewpoint.
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSnapshotGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSnapshotGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints/{viewpoint_guid}/snapshot | Retrieve a viewpoints snapshot (png or jpg) as image file.
[**bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidVisibilityGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidVisibilityGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{topic_guid}/viewpoints/{viewpoint_guid}/visibility | Retrieve visibility of components in a viewpoint.


# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsGet**
> \Swagger\Client\Model\ViewpointGET[] bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsGet($version, $project_id, $topic_guid)

Retrieve a collection of all viewpoints related to a topic.

Retrieve a collection of all viewpoints related to a topic.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ViewpointApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsGet($version, $project_id, $topic_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsGet: ', $e->getMessage(), PHP_EOL;
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

[**\Swagger\Client\Model\ViewpointGET[]**](../Model/ViewpointGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsPost**
> \Swagger\Client\Model\ViewpointGET bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsPost($version, $project_id, $topic_guid, $viewpoint_post)

Add a new viewpoint.

Add a new viewpoint. Viewpoints are immutable, meaning that they should never change. Requirements for different visualizations should be handled by creating new viewpoint elements. This operation is only possible when the server returns the createViewpoint flag in the Topic authorization.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ViewpointApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$viewpoint_post = new \Swagger\Client\Model\ViewpointPOST(); // \Swagger\Client\Model\ViewpointPOST | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsPost($version, $project_id, $topic_guid, $viewpoint_post);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |
 **viewpoint_post** | [**\Swagger\Client\Model\ViewpointPOST**](../Model/ViewpointPOST.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\ViewpointGET**](../Model/ViewpointGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidBitmapsBitmapGuidGet**
> bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidBitmapsBitmapGuidGet($version, $project_id, $topic_guid, $viewpoint_guid, $bitmap_guid)

Retrieve a specific viewpoints bitmap image file (png or jpg).

Retrieve a specific viewpoints bitmap image file (png or jpg).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ViewpointApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$viewpoint_guid = "viewpoint_guid_example"; // string | Viewpoint guid
$bitmap_guid = "bitmap_guid_example"; // string | Bitmap guid

try {
    $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidBitmapsBitmapGuidGet($version, $project_id, $topic_guid, $viewpoint_guid, $bitmap_guid);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidBitmapsBitmapGuidGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |
 **viewpoint_guid** | **string**| Viewpoint guid |
 **bitmap_guid** | **string**| Bitmap guid |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidColoringGet**
> \Swagger\Client\Model\ColoringGET[] bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidColoringGet($version, $project_id, $topic_guid, $viewpoint_guid)

Retrieve a collection of all colored components in a viewpoint.

Retrieve a collection of all colored components in a viewpoint.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ViewpointApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$viewpoint_guid = "viewpoint_guid_example"; // string | Viewpoint guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidColoringGet($version, $project_id, $topic_guid, $viewpoint_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidColoringGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |
 **viewpoint_guid** | **string**| Viewpoint guid |

### Return type

[**\Swagger\Client\Model\ColoringGET[]**](../Model/ColoringGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidGet**
> \Swagger\Client\Model\ViewpointGET[] bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidGet($version, $project_id, $topic_guid, $viewpoint_guid)

Retrieve a collection of all viewpoints related to a topic.

Retrieve a collection of all viewpoints related to a topic.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ViewpointApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$viewpoint_guid = "viewpoint_guid_example"; // string | Viewpoint guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidGet($version, $project_id, $topic_guid, $viewpoint_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |
 **viewpoint_guid** | **string**| Viewpoint guid |

### Return type

[**\Swagger\Client\Model\ViewpointGET[]**](../Model/ViewpointGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSelectionGet**
> \Swagger\Client\Model\SelectionGET[] bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSelectionGet($version, $project_id, $topic_guid, $viewpoint_guid)

Retrieve a collection of all selected components in a viewpoint.

Retrieve a collection of all selected components in a viewpoint.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ViewpointApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$viewpoint_guid = "viewpoint_guid_example"; // string | Viewpoint guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSelectionGet($version, $project_id, $topic_guid, $viewpoint_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSelectionGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |
 **viewpoint_guid** | **string**| Viewpoint guid |

### Return type

[**\Swagger\Client\Model\SelectionGET[]**](../Model/SelectionGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSnapshotGet**
> bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSnapshotGet($version, $project_id, $topic_guid, $viewpoint_guid)

Retrieve a viewpoints snapshot (png or jpg) as image file.

Retrieve a viewpoints snapshot (png or jpg) as image file.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ViewpointApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$viewpoint_guid = "viewpoint_guid_example"; // string | Viewpoint guid

try {
    $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSnapshotGet($version, $project_id, $topic_guid, $viewpoint_guid);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidSnapshotGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |
 **viewpoint_guid** | **string**| Viewpoint guid |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidVisibilityGet**
> \Swagger\Client\Model\VisibilityGET[] bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidVisibilityGet($version, $project_id, $topic_guid, $viewpoint_guid)

Retrieve visibility of components in a viewpoint.

Retrieve visibility of components in a viewpoint.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ViewpointApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$topic_guid = "topic_guid_example"; // string | Topic guid
$viewpoint_guid = "viewpoint_guid_example"; // string | Viewpoint guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidVisibilityGet($version, $project_id, $topic_guid, $viewpoint_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsTopicGuidViewpointsViewpointGuidVisibilityGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **topic_guid** | **string**| Topic guid |
 **viewpoint_guid** | **string**| Viewpoint guid |

### Return type

[**\Swagger\Client\Model\VisibilityGET[]**](../Model/VisibilityGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

