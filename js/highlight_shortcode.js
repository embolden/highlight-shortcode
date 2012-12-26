jQuery(document).ready(function($) {
  tinymce.create('tinymce.plugins.tnihs_plugin', {
    init : function( ed, url ) {

      // Variable to store if the short tag is open or not
      var open = false;

      // Register command for when button is clicked
      ed.addCommand( 'tnihs_insert_shortcode', function(u, v) {
        selected = tinyMCE.activeEditor.selection.getContent();


        if( selected ){
          // If text is selected when button is clicked, wrap shortcode around it

          // Reset content
          content = '';

          // Close other tag if currently open.
          if ( open ) {
            content = '[/highlight]'
          }

          // Wrap selected
          content += '[highlight]' + selected + '[/highlight]';

          // Reset open
          open = false;
        }else if( ! open ) {
          // Open highlight tag
          content = '[highlight]';
          open = true;
        }else {
          // Close highlight tag
          content = '[/highlight]';
          open = false;
        }

        tinymce.execCommand( 'mceInsertContent', false, content );
      });

      // Register buttons - trigger above command when clicked
      ed.addButton( 'tnihs_button', {
        title : 'Insert shortcode',
        cmd : 'tnihs_insert_shortcode',
        image : url + '/path/to/image.png'
      });

    }
  });

  // Register our TinyMCE plugin
  // first parameter is the button ID1
  // second parameter must match the first parameter of the tinymce.create() function above
  tinymce.PluginManager.add( 'tnihs_button', tinymce.plugins.tnihs_plugin );
});