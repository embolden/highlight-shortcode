jQuery(document).ready(function($) {
  tinymce.create('tinymce.plugins.tnihs_plugin', {
    init : function( ed, url ) {
      // Register command for when button is clicked
      ed.addCommand( 'tnihs_insert_shortcode', function() {
        selected = tinyMCE.activeEditor.selection.getContent();

        if( selected ){
          //If text is selected when button is clicked
          //Wrap shortcode around it.
          content = '[highlight]' + selected + '[/highlight]';
        }else{
          content = '[highlight]';
        }

        tinymce.execCommand( 'mceInsertContent', false, content );
      });

      // Register buttons - trigger above command when clicked
      ed.addButton( 'tnihs_button', {
        title : 'Insert shortcode',
        cmd : 'tnihs_insert_shortcode',
        image: url + '/path/to/image.png'
      });
    }
  });

  // Register our TinyMCE plugin
  // first parameter is the button ID1
  // second parameter must match the first parameter of the tinymce.create() function above
  tinymce.PluginManager.add( 'tnihs_button', tinymce.plugins.tnihs_plugin );
});