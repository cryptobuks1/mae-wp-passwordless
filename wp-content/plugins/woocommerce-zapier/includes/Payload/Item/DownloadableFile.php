<?php

namespace OM4\Zapier\Payload\Item;

use OM4\Zapier\Payload\Base\Item;

defined( 'ABSPATH' ) || exit;

/**
 * Implement base structure requirements for Downloadable File Object.
 */
class DownloadableFile extends Item {

	/**
	 * Holds the type information for validate
	 *
	 * @var array
	 */
	protected static $property_types = [
		'filename'     => 'string',
		'download_url' => 'string',
	];

	/**
	 * File Name.
	 *
	 * @var  string
	 */
	protected $filename;

	/**
	 * URL to download the downloadable file from.
	 *
	 * @var  string
	 */
	protected $download_url;
}
