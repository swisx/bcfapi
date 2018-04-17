# Swagger\Client\PublicApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionAuthGet**](PublicApi.md#bcfVersionAuthGet) | **GET** /bcf/{version}/auth | 
[**bcfVersionCurrentUserGet**](PublicApi.md#bcfVersionCurrentUserGet) | **GET** /bcf/{version}/current-user | Get current user
[**bcfVersionsGet**](PublicApi.md#bcfVersionsGet) | **GET** /bcf/versions | List of versions


# **bcfVersionAuthGet**
> \Swagger\Client\Model\AuthGET[] bcfVersionAuthGet($version)



Obtaining Authentication Information

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\PublicApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version

try {
    $result = $apiInstance->bcfVersionAuthGet($version);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PublicApi->bcfVersionAuthGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |

### Return type

[**\Swagger\Client\Model\AuthGET[]**](../Model/AuthGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionCurrentUserGet**
> \Swagger\Client\Model\UserGET bcfVersionCurrentUserGet($version)

Get current user

Get current user

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\PublicApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version

try {
    $result = $apiInstance->bcfVersionCurrentUserGet($version);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PublicApi->bcfVersionCurrentUserGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |

### Return type

[**\Swagger\Client\Model\UserGET**](../Model/UserGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionsGet**
> \Swagger\Client\Model\VersionsGET[] bcfVersionsGet()

List of versions

Returns a list of all supported BCF API versions of the server.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\PublicApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->bcfVersionsGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PublicApi->bcfVersionsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\VersionsGET[]**](../Model/VersionsGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

