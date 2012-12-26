<?php
/**
 * @package Highlight_Shortcode
 */
/*
Plugin Name: Highlight Shortcode
Plugin URI:
Description: Adds a highlight wrapper to content.
Version: 0.1
Author: The Net Impact
Author URI: http://www.thenetimpact.com
License: GPLv2 or later
*/

/*
 * http://wordpress.stackexchange.com/questions/72394/how-to-add-a-shortcode-button-to-the-tinymce-editor
 */

 // init process for registering our button
function tnihs_shortcode_button_init() {

  //Abort early if the user will never see TinyMCE
  if ( ! current_user_can( 'edit_posts' )
    && ! current_user_can( 'edit_pages' )
    && get_user_option( 'rich_editing' ) == 'true' ) {
    return;
  }

  //Add a callback to regiser our tinymce plugin
  add_filter( 'mce_external_plugins', 'tnihs_register_tinymce_plugin' );

  // Add a callback to add our button to the TinyMCE toolbar
  add_filter( 'mce_buttons', 'tnihs_add_tinymce_button' );
}
add_action('init', 'tnihs_shortcode_button_init');


//This callback registers our plug-in
function tnihs_register_tinymce_plugin( $plugin_array ) {
  $plugin_array['tnihs_button'] = 'js/highlight_shortcode.js';
  return $plugin_array;
}


//This callback adds our button to the toolbar
function tnihs_add_tinymce_button( $buttons ) {
  //Add the button ID to the $button array
  $buttons[] = "tnihs_button";
  return $buttons;
}

?>