<div class="notice notice-error fade is-dismissible">
  <p>
		<?php printf( /* translators: conflicting plugin name */
			__( 'A setting in the %s plugin causes all date based sitemaps to redirect to the main page.', 'xml-sitemap-feed'),
			translate('Rank Math','rank-math')
		); ?>
    <?php printf( /* translators: Date archives, Archives (linked to WP SEO plugin settings), Split by, None, Included post types (linked to Sitemap settings) */
			__( 'Please either enable <strong>%1$s</strong> under %2$s in your SEO settings or set all <strong>%3$s</strong> options to <strong>%4$s</strong> under %5$s in your XML Sitemap settings.', 'xml-sitemap-feed'),
			translate('Date Archives','rank-math'),
			'<a href="' . admin_url('admin.php') . '?page=rank-math-options-titles#setting-panel-misc">' . translate('Misc Pages','rank-math') . '</a>',
			__( 'Split by', 'xml-sitemap-feed' ),
			translate('None'),
			'<a href="' . admin_url('options-general.php') . '?page=xmlsf">' . __('Included post types','xml-sitemap-feed') . '</a>'
		); ?>
  </p>
</div>
