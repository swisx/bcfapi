# Swagger\Client\DocumentApi

All URIs are relative to *https://virtserver.swaggerhub.com/swisx/bcfAPI/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bcfVersionProjectsProjectIdDocumentsDocumentGuidGet**](DocumentApi.md#bcfVersionProjectsProjectIdDocumentsDocumentGuidGet) | **GET** /bcf/{version}/projects/{project_id}/documents/{document_guid} | Retrieves a document as binary file.
[**bcfVersionProjectsProjectIdDocumentsGet**](DocumentApi.md#bcfVersionProjectsProjectIdDocumentsGet) | **GET** /bcf/{version}/projects/{project_id}/documents | Retrieve a collection of all documents uploaded to a project.
[**bcfVersionProjectsProjectIdDocumentsPost**](DocumentApi.md#bcfVersionProjectsProjectIdDocumentsPost) | **POST** /bcf/{version}/projects/{project_id}/documents | Upload a document (binary file) to a project.


# **bcfVersionProjectsProjectIdDocumentsDocumentGuidGet**
> \Swagger\Client\Model\DocumentGET bcfVersionProjectsProjectIdDocumentsDocumentGuidGet($version, $project_id, $document_guid)

Retrieves a document as binary file.

Retrieves a document as binary file.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DocumentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID
$document_guid = "document_guid_example"; // string | Document guid

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdDocumentsDocumentGuidGet($version, $project_id, $document_guid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentApi->bcfVersionProjectsProjectIdDocumentsDocumentGuidGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |
 **document_guid** | **string**| Document guid |

### Return type

[**\Swagger\Client\Model\DocumentGET**](../Model/DocumentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdDocumentsGet**
> \Swagger\Client\Model\DocumentGET[] bcfVersionProjectsProjectIdDocumentsGet($version, $project_id)

Retrieve a collection of all documents uploaded to a project.

Retrieve a collection of all documents uploaded to a project.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DocumentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdDocumentsGet($version, $project_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentApi->bcfVersionProjectsProjectIdDocumentsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |

### Return type

[**\Swagger\Client\Model\DocumentGET[]**](../Model/DocumentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **bcfVersionProjectsProjectIdDocumentsPost**
> \Swagger\Client\Model\DocumentGET[] bcfVersionProjectsProjectIdDocumentsPost($version, $project_id)

Upload a document (binary file) to a project.

Upload a document (binary file) to a project. This operation is only possible when the server returns the createDocument flag in the Project authorization.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DocumentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$version = "version_example"; // string | BFC Version
$project_id = "project_id_example"; // string | Project ID

try {
    $result = $apiInstance->bcfVersionProjectsProjectIdDocumentsPost($version, $project_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DocumentApi->bcfVersionProjectsProjectIdDocumentsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **string**| BFC Version |
 **project_id** | **string**| Project ID |

### Return type

[**\Swagger\Client\Model\DocumentGET[]**](../Model/DocumentGET.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

