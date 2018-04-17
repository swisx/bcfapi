<?php
/**
 * Visibility
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * BCFAPI
 *
 * A BCF API
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace Swagger\Client\Model;

use \ArrayAccess;
use \Swagger\Client\ObjectSerializer;

/**
 * Visibility Class Doc Comment
 *
 * @category Class
 * @package     Swagger\Client
 * @author      Swagger Codegen team
 * @link        https://github.com/swagger-api/swagger-codegen
 */
class Visibility implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'visibility';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'default_visibility' => 'bool',
        'exceptions' => '\Swagger\Client\Model\ComponentList',
        'view_setup_hints' => '\Swagger\Client\Model\ViewSetupHints'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'default_visibility' => null,
        'exceptions' => null,
        'view_setup_hints' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'default_visibility' => 'default_visibility',
        'exceptions' => 'exceptions',
        'view_setup_hints' => 'view_setup_hints'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'default_visibility' => 'setDefaultVisibility',
        'exceptions' => 'setExceptions',
        'view_setup_hints' => 'setViewSetupHints'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'default_visibility' => 'getDefaultVisibility',
        'exceptions' => 'getExceptions',
        'view_setup_hints' => 'getViewSetupHints'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['default_visibility'] = isset($data['default_visibility']) ? $data['default_visibility'] : false;
        $this->container['exceptions'] = isset($data['exceptions']) ? $data['exceptions'] : null;
        $this->container['view_setup_hints'] = isset($data['view_setup_hints']) ? $data['view_setup_hints'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {

        return true;
    }


    /**
     * Gets default_visibility
     *
     * @return bool
     */
    public function getDefaultVisibility()
    {
        return $this->container['default_visibility'];
    }

    /**
     * Sets default_visibility
     *
     * @param bool $default_visibility default_visibility
     *
     * @return $this
     */
    public function setDefaultVisibility($default_visibility)
    {
        $this->container['default_visibility'] = $default_visibility;

        return $this;
    }

    /**
     * Gets exceptions
     *
     * @return \Swagger\Client\Model\ComponentList
     */
    public function getExceptions()
    {
        return $this->container['exceptions'];
    }

    /**
     * Sets exceptions
     *
     * @param \Swagger\Client\Model\ComponentList $exceptions exceptions
     *
     * @return $this
     */
    public function setExceptions($exceptions)
    {
        $this->container['exceptions'] = $exceptions;

        return $this;
    }

    /**
     * Gets view_setup_hints
     *
     * @return \Swagger\Client\Model\ViewSetupHints
     */
    public function getViewSetupHints()
    {
        return $this->container['view_setup_hints'];
    }

    /**
     * Sets view_setup_hints
     *
     * @param \Swagger\Client\Model\ViewSetupHints $view_setup_hints view_setup_hints
     *
     * @return $this
     */
    public function setViewSetupHints($view_setup_hints)
    {
        $this->container['view_setup_hints'] = $view_setup_hints;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param  integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param  integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param  integer $offset Offset
     * @param  mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param  integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}

