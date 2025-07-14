<?php
/**
 * Plugin Name:       Chaser Email Signup
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           2.2.6
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       chaser-email-signup
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit; // Exit if accessed directly.
}

function create_block_email_signup_block_init() {
  register_block_type( __DIR__ . '/build/chaser-email-signup' );
}
add_action( 'init', 'create_block_email_signup_block_init' );

if (is_admin()) {
  require_once plugin_dir_path(__FILE__) . 'admin-settings.php';
}

function email_signup_add_settings_link($links) {
    $settings_link = '<a href="options-general.php?page=email-signup">Settings</a>';
    array_unshift($links, $settings_link); // Add to the beginning of the links array
    return $links;
}

add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'email_signup_add_settings_link');


// Register the REST API endpoint
add_action('rest_api_init', function () {
  register_rest_route('email-signup/v1', '/register', array(
    'methods' => 'POST',
    'callback' => 'register_email',
  ));
});

function register_email(WP_REST_Request $request) {
  $api_key = get_option('email_signup_api_key');
  $campaign_id = get_option('email_signup_campaign_id');
  
  if (empty($api_key) || empty($campaign_id)) {
    return new WP_Error('missing_settings', 'API key and campaign ID are required', array('status' => 400));
  };

  $email = $request->get_param('email');

  $response = wp_remote_post('https://api.getresponse.com/v3/contacts', array(
    'body' => json_encode(array(
      'email' => $email,
      'campaign' => array(
        'campaignId' => $campaign_id
      )
    )),
    'headers' => array(
      'X-Auth-Token' => 'api-key ' . $api_key,
      'Content-Type' => 'application/json'
    )
  ));

  if (is_wp_error($response)) {
    return new WP_Error('api_error', 'Failed to register email', array('status' => 500));
  }

  return json_decode(wp_remote_retrieve_body($response));
}
?>
