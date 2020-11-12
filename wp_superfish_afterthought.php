<?php
   /*
   Plugin Name: Superfish Menu Afterthought
   Plugin URI: https://accessibility.duke.edu
   description: Adds the accessibile Superfish menu.
   Version: 1.0.1
   Author: Joel Crawford Smith
   License: GPL2
   */

add_action( 'wp_enqueue_scripts', 'superfish_plugin_assets' );

function superfish_plugin_assets() {

  wp_enqueue_script( 'superfish-script', 'https://cdnjs.cloudflare.com/ajax/libs/superfish/1.7.10/js/superfish.min.js', array('jquery'), null, true );

  wp_enqueue_script( 'wp_superfish_afterthought', plugin_dir_url(__FILE__) . 'wp_superfish_afterthought.js', array('jquery'), '1.0.1', true );
  
}