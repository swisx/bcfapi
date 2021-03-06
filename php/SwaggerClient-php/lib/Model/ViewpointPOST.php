<?php
/**
 * ViewpointPOST
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
 * ViewpointPOST Class Doc Comment
 *
 * @category Class
 * @package     Swagger\Client
 * @author      Swagger Codegen team
 * @link        https://github.com/swagger-api/swagger-codegen
 */
class ViewpointPOST implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'viewpoint_POST';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'index' => 'int',
        'guid' => 'string',
        'orthogonal_camera' => '\Swagger\Client\Model\OrthogonalCamera',
        'perspective_camera' => '\Swagger\Client\Model\PerspectiveCamera',
        'lines' => '\Swagger\Client\Model\Line[]',
        'clipping_planes' => '\Swagger\Client\Model\ClippingPlane[]',
        'bitmaps' => '\Swagger\Client\Model\BitmapGET[]',
        'snapshot' => '\Swagger\Client\Model\SnapshotGET',
        'components' => '\Swagger\Client\Model\Components'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'index' => null,
        'guid' => null,
        'orthogonal_camera' => null,
        'perspective_camera' => null,
        'lines' => null,
        'clipping_planes' => null,
        'bitmaps' => null,
        'snapshot' => null,
        'components' => null
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
        'index' => 'index',
        'guid' => 'guid',
        'orthogonal_camera' => 'orthogonal_camera',
        'perspective_camera' => 'perspective_camera',
        'lines' => 'lines',
        'clipping_planes' => 'clipping_planes',
        'bitmaps' => 'bitmaps',
        'snapshot' => 'snapshot',
        'components' => 'components'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'index' => 'setIndex',
        'guid' => 'setGuid',
        'orthogonal_camera' => 'setOrthogonalCamera',
        'perspective_camera' => 'setPerspectiveCamera',
        'lines' => 'setLines',
        'clipping_planes' => 'setClippingPlanes',
        'bitmaps' => 'setBitmaps',
        'snapshot' => 'setSnapshot',
        'components' => 'setComponents'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'index' => 'getIndex',
        'guid' => 'getGuid',
        'orthogonal_camera' => 'getOrthogonalCamera',
        'perspective_camera' => 'getPerspectiveCamera',
        'lines' => 'getLines',
        'clipping_planes' => 'getClippingPlanes',
        'bitmaps' => 'getBitmaps',
        'snapshot' => 'getSnapshot',
        'components' => 'getComponents'
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
        $this->container['index'] = isset($data['index']) ? $data['index'] : null;
        $this->container['guid'] = isset($data['guid']) ? $data['guid'] : null;
        $this->container['orthogonal_camera'] = isset($data['orthogonal_camera']) ? $data['orthogonal_camera'] : null;
        $this->container['perspective_camera'] = isset($data['perspective_camera']) ? $data['perspective_camera'] : null;
        $this->container['lines'] = isset($data['lines']) ? $data['lines'] : null;
        $this->container['clipping_planes'] = isset($data['clipping_planes']) ? $data['clipping_planes'] : null;
        $this->container['bitmaps'] = isset($data['bitmaps']) ? $data['bitmaps'] : null;
        $this->container['snapshot'] = isset($data['snapshot']) ? $data['snapshot'] : null;
        $this->container['components'] = isset($data['components']) ? $data['components'] : null;
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
     * Gets index
     *
     * @return int
     */
    public function getIndex()
    {
        return $this->container['index'];
    }

    /**
     * Sets index
     *
     * @param int $index index
     *
     * @return $this
     */
    public function setIndex($index)
    {
        $this->container['index'] = $index;

        return $this;
    }

    /**
     * Gets guid
     *
     * @return string
     */
    public function getGuid()
    {
        return $this->container['guid'];
    }

    /**
     * Sets guid
     *
     * @param string $guid guid
     *
     * @return $this
     */
    public function setGuid($guid)
    {
        $this->container['guid'] = $guid;

        return $this;
    }

    /**
     * Gets orthogonal_camera
     *
     * @return \Swagger\Client\Model\OrthogonalCamera
     */
    public function getOrthogonalCamera()
    {
        return $this->container['orthogonal_camera'];
    }

    /**
     * Sets orthogonal_camera
     *
     * @param \Swagger\Client\Model\OrthogonalCamera $orthogonal_camera orthogonal_camera
     *
     * @return $this
     */
    public function setOrthogonalCamera($orthogonal_camera)
    {
        $this->container['orthogonal_camera'] = $orthogonal_camera;

        return $this;
    }

    /**
     * Gets perspective_camera
     *
     * @return \Swagger\Client\Model\PerspectiveCamera
     */
    public function getPerspectiveCamera()
    {
        return $this->container['perspective_camera'];
    }

    /**
     * Sets perspective_camera
     *
     * @param \Swagger\Client\Model\PerspectiveCamera $perspective_camera perspective_camera
     *
     * @return $this
     */
    public function setPerspectiveCamera($perspective_camera)
    {
        $this->container['perspective_camera'] = $perspective_camera;

        return $this;
    }

    /**
     * Gets lines
     *
     * @return \Swagger\Client\Model\Line[]
     */
    public function getLines()
    {
        return $this->container['lines'];
    }

    /**
     * Sets lines
     *
     * @param \Swagger\Client\Model\Line[] $lines lines
     *
     * @return $this
     */
    public function setLines($lines)
    {
        $this->container['lines'] = $lines;

        return $this;
    }

    /**
     * Gets clipping_planes
     *
     * @return \Swagger\Client\Model\ClippingPlane[]
     */
    public function getClippingPlanes()
    {
        return $this->container['clipping_planes'];
    }

    /**
     * Sets clipping_planes
     *
     * @param \Swagger\Client\Model\ClippingPlane[] $clipping_planes clipping_planes
     *
     * @return $this
     */
    public function setClippingPlanes($clipping_planes)
    {
        $this->container['clipping_planes'] = $clipping_planes;

        return $this;
    }

    /**
     * Gets bitmaps
     *
     * @return \Swagger\Client\Model\BitmapGET[]
     */
    public function getBitmaps()
    {
        return $this->container['bitmaps'];
    }

    /**
     * Sets bitmaps
     *
     * @param \Swagger\Client\Model\BitmapGET[] $bitmaps bitmaps
     *
     * @return $this
     */
    public function setBitmaps($bitmaps)
    {
        $this->container['bitmaps'] = $bitmaps;

        return $this;
    }

    /**
     * Gets snapshot
     *
     * @return \Swagger\Client\Model\SnapshotGET
     */
    public function getSnapshot()
    {
        return $this->container['snapshot'];
    }

    /**
     * Sets snapshot
     *
     * @param \Swagger\Client\Model\SnapshotGET $snapshot snapshot
     *
     * @return $this
     */
    public function setSnapshot($snapshot)
    {
        $this->container['snapshot'] = $snapshot;

        return $this;
    }

    /**
     * Gets components
     *
     * @return \Swagger\Client\Model\Components
     */
    public function getComponents()
    {
        return $this->container['components'];
    }

    /**
     * Sets components
     *
     * @param \Swagger\Client\Model\Components $components components
     *
     * @return $this
     */
    public function setComponents($components)
    {
        $this->container['components'] = $components;

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

