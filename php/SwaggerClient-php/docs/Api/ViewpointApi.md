# Swagger\Client\ViewpointApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet**](ViewpointApi.md#bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet) | **GET** /bcf/{version}/projects/{guid}/topics/{guid}/viewpoints/{guid}/bitmaps/{guid} | Retrieve a specific viewpoints bitmap image file (png or jpg).
[**bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet**](ViewpointApi.md#bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet) | **GET** /bcf/{version}/projects/{guid}/topics/{guid}/viewpoints/{guid}/snapshot | Retrieve a viewpoints snapshot (png or jpg) as image file.
[**bcfVersionProjectsProjectIdTopicsGuidViewpointsGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsGuidViewpointsGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints | Retrieve a collection of all viewpoints related to a topic.
[**bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid}/coloring | Retrieve a collection of all colored components in a viewpoint.
[**bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid} | Retrieve a collection of all viewpoints related to a topic.
[**bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid}/selection | Retrieve a collection of all selected components in a viewpoint.
[**bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet) | **GET** /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid}/visibility | Retrieve visibility of components in a viewpoint.
[**bcfVersionProjectsProjectIdTopicsGuidViewpointsPost**](ViewpointApi.md#bcfVersionProjectsProjectIdTopicsGuidViewpointsPost) | **POST** /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints | Add a new viewpoint.


# **bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet**
> bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet($version, $project_id, $guid)

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
$guid = "guid_example"; // string | Bitmap guid

try {
    $apiInstance->bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet($version, $project_id, $guid);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsGuidTopicsGuidViewpointsGuidBitmapsGuidGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Bitmap guid |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet**
> bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet($version, $project_id, $guid)

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
$guid = "guid_example"; // string | Viewpoint guid

try {
    $apiInstance->bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet($version, $project_id, $guid);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsGuidTopicsGuidViewpointsGuidSnapshotGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Viewpoint guid |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidViewpointsGet**
> \Swagger\Client\Model\ViewpointGET[] bcfVersionProjectsProjectIdTopicsGuidViewpointsGet($version, $project_id, $guid)

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
$guid = "guid_example"; // string | Topic guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidViewpointsGet($version, $project_id, $guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsGuidViewpointsGet: ', $e->getMessage(), PHP_EOL;
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

[**\Swagger\Client\Model\ViewpointGET[]**](../Model/ViewpointGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet**
> \Swagger\Client\Model\ColoringGET[] bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet($version, $project_id, $guid)

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
$guid = "guid_example"; // string | Viewpoint guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet($version, $project_id, $guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidColoringGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Viewpoint guid |

### Return type

[**\Swagger\Client\Model\ColoringGET[]**](../Model/ColoringGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet**
> \Swagger\Client\Model\ViewpointGET[] bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet($version, $project_id, $guid)

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
$guid = "guid_example"; // string | Viewpoint guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet($version, $project_id, $guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Viewpoint guid |

### Return type

[**\Swagger\Client\Model\ViewpointGET[]**](../Model/ViewpointGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet**
> \Swagger\Client\Model\SelectionGET[] bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet($version, $project_id, $guid)

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
$guid = "guid_example"; // string | Viewpoint guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet($version, $project_id, $guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidSelectionGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Viewpoint guid |

### Return type

[**\Swagger\Client\Model\SelectionGET[]**](../Model/SelectionGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet**
> \Swagger\Client\Model\VisibilityGET[] bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet($version, $project_id, $guid)

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
$guid = "guid_example"; // string | Viewpoint guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet($version, $project_id, $guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsGuidViewpointsGuidVisibilityGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Viewpoint guid |

### Return type

[**\Swagger\Client\Model\VisibilityGET[]**](../Model/VisibilityGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdTopicsGuidViewpointsPost**
> \Swagger\Client\Model\ViewpointGET bcfVersionProjectsProjectIdTopicsGuidViewpointsPost($version, $project_id, $guid, $viewpoint_post)

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
$guid = "guid_example"; // string | Topic guid
$viewpoint_post = new \Swagger\Client\Model\ViewpointPOST(); // \Swagger\Client\Model\ViewpointPOST | 

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdTopicsGuidViewpointsPost($version, $project_id, $guid, $viewpoint_post);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ViewpointApi->bcfVersionProjectsProjectIdTopicsGuidViewpointsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **guid** | **string**| Topic guid |
 **viewpoint_post** | [**\Swagger\Client\Model\ViewpointPOST**](../Model/ViewpointPOST.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\ViewpointGET**](../Model/ViewpointGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

