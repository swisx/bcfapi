<?php
/**
 * TopicPOST
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
 * TopicPOST Class Doc Comment
 *
 * @category Class
 * @package     Swagger\Client
 * @author      Swagger Codegen team
 * @link        https://github.com/swagger-api/swagger-codegen
 */
class TopicPOST implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'Topic_POST';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'guid' => 'string',
        'topic_type' => 'string',
        'topic_status' => 'string',
        'reference_links' => 'string[]',
        'title' => 'string',
        'priority' => 'string',
        'index' => 'int',
        'labels' => 'string[]',
        'creation_date' => 'string',
        'creation_author' => 'string',
        'modified_date' => 'string',
        'modified_author' => 'string',
        'assigned_to' => 'string',
        'stage' => 'string',
        'description' => 'string',
        'bim_snippet' => '\Swagger\Client\Model\BimSnippet',
        'due_date' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'guid' => null,
        'topic_type' => null,
        'topic_status' => null,
        'reference_links' => null,
        'title' => null,
        'priority' => null,
        'index' => null,
        'labels' => null,
        'creation_date' => null,
        'creation_author' => null,
        'modified_date' => null,
        'modified_author' => null,
        'assigned_to' => null,
        'stage' => null,
        'description' => null,
        'bim_snippet' => null,
        'due_date' => null
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
        'guid' => 'guid',
        'topic_type' => 'topic_type',
        'topic_status' => 'topic_status',
        'reference_links' => 'reference_links',
        'title' => 'title',
        'priority' => 'priority',
        'index' => 'index',
        'labels' => 'labels',
        'creation_date' => 'creation_date',
        'creation_author' => 'creation_author',
        'modified_date' => 'modified_date',
        'modified_author' => 'modified_author',
        'assigned_to' => 'assigned_to',
        'stage' => 'stage',
        'description' => 'description',
        'bim_snippet' => 'bim_snippet',
        'due_date' => 'due_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'guid' => 'setGuid',
        'topic_type' => 'setTopicType',
        'topic_status' => 'setTopicStatus',
        'reference_links' => 'setReferenceLinks',
        'title' => 'setTitle',
        'priority' => 'setPriority',
        'index' => 'setIndex',
        'labels' => 'setLabels',
        'creation_date' => 'setCreationDate',
        'creation_author' => 'setCreationAuthor',
        'modified_date' => 'setModifiedDate',
        'modified_author' => 'setModifiedAuthor',
        'assigned_to' => 'setAssignedTo',
        'stage' => 'setStage',
        'description' => 'setDescription',
        'bim_snippet' => 'setBimSnippet',
        'due_date' => 'setDueDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'guid' => 'getGuid',
        'topic_type' => 'getTopicType',
        'topic_status' => 'getTopicStatus',
        'reference_links' => 'getReferenceLinks',
        'title' => 'getTitle',
        'priority' => 'getPriority',
        'index' => 'getIndex',
        'labels' => 'getLabels',
        'creation_date' => 'getCreationDate',
        'creation_author' => 'getCreationAuthor',
        'modified_date' => 'getModifiedDate',
        'modified_author' => 'getModifiedAuthor',
        'assigned_to' => 'getAssignedTo',
        'stage' => 'getStage',
        'description' => 'getDescription',
        'bim_snippet' => 'getBimSnippet',
        'due_date' => 'getDueDate'
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
        $this->container['guid'] = isset($data['guid']) ? $data['guid'] : null;
        $this->container['topic_type'] = isset($data['topic_type']) ? $data['topic_type'] : null;
        $this->container['topic_status'] = isset($data['topic_status']) ? $data['topic_status'] : null;
        $this->container['reference_links'] = isset($data['reference_links']) ? $data['reference_links'] : null;
        $this->container['title'] = isset($data['title']) ? $data['title'] : null;
        $this->container['priority'] = isset($data['priority']) ? $data['priority'] : null;
        $this->container['index'] = isset($data['index']) ? $data['index'] : null;
        $this->container['labels'] = isset($data['labels']) ? $data['labels'] : null;
        $this->container['creation_date'] = isset($data['creation_date']) ? $data['creation_date'] : null;
        $this->container['creation_author'] = isset($data['creation_author']) ? $data['creation_author'] : null;
        $this->container['modified_date'] = isset($data['modified_date']) ? $data['modified_date'] : null;
        $this->container['modified_author'] = isset($data['modified_author']) ? $data['modified_author'] : null;
        $this->container['assigned_to'] = isset($data['assigned_to']) ? $data['assigned_to'] : null;
        $this->container['stage'] = isset($data['stage']) ? $data['stage'] : null;
        $this->container['description'] = isset($data['description']) ? $data['description'] : null;
        $this->container['bim_snippet'] = isset($data['bim_snippet']) ? $data['bim_snippet'] : null;
        $this->container['due_date'] = isset($data['due_date']) ? $data['due_date'] : null;
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
     * Gets topic_type
     *
     * @return string
     */
    public function getTopicType()
    {
        return $this->container['topic_type'];
    }

    /**
     * Sets topic_type
     *
     * @param string $topic_type topic_type
     *
     * @return $this
     */
    public function setTopicType($topic_type)
    {
        $this->container['topic_type'] = $topic_type;

        return $this;
    }

    /**
     * Gets topic_status
     *
     * @return string
     */
    public function getTopicStatus()
    {
        return $this->container['topic_status'];
    }

    /**
     * Sets topic_status
     *
     * @param string $topic_status topic_status
     *
     * @return $this
     */
    public function setTopicStatus($topic_status)
    {
        $this->container['topic_status'] = $topic_status;

        return $this;
    }

    /**
     * Gets reference_links
     *
     * @return string[]
     */
    public function getReferenceLinks()
    {
        return $this->container['reference_links'];
    }

    /**
     * Sets reference_links
     *
     * @param string[] $reference_links reference_links
     *
     * @return $this
     */
    public function setReferenceLinks($reference_links)
    {
        $this->container['reference_links'] = $reference_links;

        return $this;
    }

    /**
     * Gets title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->container['title'];
    }

    /**
     * Sets title
     *
     * @param string $title title
     *
     * @return $this
     */
    public function setTitle($title)
    {
        $this->container['title'] = $title;

        return $this;
    }

    /**
     * Gets priority
     *
     * @return string
     */
    public function getPriority()
    {
        return $this->container['priority'];
    }

    /**
     * Sets priority
     *
     * @param string $priority priority
     *
     * @return $this
     */
    public function setPriority($priority)
    {
        $this->container['priority'] = $priority;

        return $this;
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
     * Gets labels
     *
     * @return string[]
     */
    public function getLabels()
    {
        return $this->container['labels'];
    }

    /**
     * Sets labels
     *
     * @param string[] $labels labels
     *
     * @return $this
     */
    public function setLabels($labels)
    {
        $this->container['labels'] = $labels;

        return $this;
    }

    /**
     * Gets creation_date
     *
     * @return string
     */
    public function getCreationDate()
    {
        return $this->container['creation_date'];
    }

    /**
     * Sets creation_date
     *
     * @param string $creation_date creation_date
     *
     * @return $this
     */
    public function setCreationDate($creation_date)
    {
        $this->container['creation_date'] = $creation_date;

        return $this;
    }

    /**
     * Gets creation_author
     *
     * @return string
     */
    public function getCreationAuthor()
    {
        return $this->container['creation_author'];
    }

    /**
     * Sets creation_author
     *
     * @param string $creation_author creation_author
     *
     * @return $this
     */
    public function setCreationAuthor($creation_author)
    {
        $this->container['creation_author'] = $creation_author;

        return $this;
    }

    /**
     * Gets modified_date
     *
     * @return string
     */
    public function getModifiedDate()
    {
        return $this->container['modified_date'];
    }

    /**
     * Sets modified_date
     *
     * @param string $modified_date modified_date
     *
     * @return $this
     */
    public function setModifiedDate($modified_date)
    {
        $this->container['modified_date'] = $modified_date;

        return $this;
    }

    /**
     * Gets modified_author
     *
     * @return string
     */
    public function getModifiedAuthor()
    {
        return $this->container['modified_author'];
    }

    /**
     * Sets modified_author
     *
     * @param string $modified_author modified_author
     *
     * @return $this
     */
    public function setModifiedAuthor($modified_author)
    {
        $this->container['modified_author'] = $modified_author;

        return $this;
    }

    /**
     * Gets assigned_to
     *
     * @return string
     */
    public function getAssignedTo()
    {
        return $this->container['assigned_to'];
    }

    /**
     * Sets assigned_to
     *
     * @param string $assigned_to assigned_to
     *
     * @return $this
     */
    public function setAssignedTo($assigned_to)
    {
        $this->container['assigned_to'] = $assigned_to;

        return $this;
    }

    /**
     * Gets stage
     *
     * @return string
     */
    public function getStage()
    {
        return $this->container['stage'];
    }

    /**
     * Sets stage
     *
     * @param string $stage stage
     *
     * @return $this
     */
    public function setStage($stage)
    {
        $this->container['stage'] = $stage;

        return $this;
    }

    /**
     * Gets description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string $description description
     *
     * @return $this
     */
    public function setDescription($description)
    {
        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets bim_snippet
     *
     * @return \Swagger\Client\Model\BimSnippet
     */
    public function getBimSnippet()
    {
        return $this->container['bim_snippet'];
    }

    /**
     * Sets bim_snippet
     *
     * @param \Swagger\Client\Model\BimSnippet $bim_snippet bim_snippet
     *
     * @return $this
     */
    public function setBimSnippet($bim_snippet)
    {
        $this->container['bim_snippet'] = $bim_snippet;

        return $this;
    }

    /**
     * Gets due_date
     *
     * @return string
     */
    public function getDueDate()
    {
        return $this->container['due_date'];
    }

    /**
     * Sets due_date
     *
     * @param string $due_date due_date
     *
     * @return $this
     */
    public function setDueDate($due_date)
    {
        $this->container['due_date'] = $due_date;

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

