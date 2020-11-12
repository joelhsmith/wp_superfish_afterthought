/**
  * MINIMALLY INVASIVE SUPERFISH MENU ADD-ON (as an afterthought).
  * 
  * This code will add the accessibile-enough Superfish menu. It is compatible with 95%+ of all WordPress Themes (that don’t come with an accessible dropdown already).   
  * 
  * The Plugin’s Javascript part requires no user configuration and no custom field. It does some fancy selector detection for that.  Since each theme’s CSS is less predictable, that will small part be on a site owner to add to the “Simple Custom CSS” field. Not related to this Plugin.
  *
  * The software/code is provided "As is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, 
  * fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, 
  * damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software 
  * or the use or other dealings in the software/code.
  * 
  */

jQuery(window).load(function($) {
    /*** 
     * WordPress themes are not consistent on what class they put ON a menu. 
     * BUT! they ARE consistent with the class names on the menu items themselves. 
     * This uses them and filters its way back to the top most element's parent, 
     * which is what superfish() instantiates on.
     */

      /**
       * FIND MENUS WITH DROPDOWNS
       */ 
      // Iterate over all top level menu items to detect if there is a drop down... exluding double nested ones.
      jQuery('.menu-item-has-children').not('.menu-item-has-children > ul > .menu-item-has-children').parent().each(function(i) {
        $menuWrapper = jQuery(this);
        // Check if it's dropdown is hidden AND ensure superfish is not already on the menu
        if ( $menuWrapper.find('ul:hidden').length && ! $menuWrapper.hasClass('sf-js-enabled')) {
          $menuWrapper.superfish();	
        }
        
        /**
         * prepend with a help tip 
         */ 
        var SR_NOTE = "Screen readers use Tab key to navigate the following menu."
        // since we can't know what classes are availible we inline style screen reader only text
        var SR_ONLY = "position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;"
        // place it immediatly before each menu that it applies to
        $menuWrapper.before(jQuery('<div/>', {
          style: SR_ONLY,
          tabindex: '0',
          text:  SR_NOTE,
        }));
      });	
}( jQuery ));

