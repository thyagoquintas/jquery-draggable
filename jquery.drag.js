/*!
 * jQuery Drag plugin v1.0.0
 * 
 * Copyright 2012, Thyago Quintas (dev@thyagoquintas.com.br)
 * https://github.com/thyagoquintas/jquery-drag/
 * 
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0 
 */
(function($) {
    $.fn.drag = function(contents) {
        contents = $.extend({
        	cursor : "move",
        	onDragStart : function() { },
        	onDragging : function() { },
        	onDragEnd : function() { }
        }, contents);

	    var onDragStart = contents.onDragStart;
	    var onDraging = contents.onDraging;
	    var onDragEnd = contents.onDragEnd;
        var $element = this;

        return $element.css('cursor', contents.cursor).on("mousedown", function(e) {
            onDragStart($(this));
            var $element = $(this).addClass('draggable');
            
            var z_idx = $element.css('z-index'),
            	drg_w = $element.outerWidth(),
                drg_h = $element.outerHeight(),
                pos_y = $element.offset().top + drg_h - e.pageY,
                pos_x = $element.offset().left + drg_w - e.pageX;
            
            $element.css('z-index', 9999).parents().on("mousemove", function(e) {
                onDragging(e);
                $('.draggable').offset({
                    top :  e.pageY + pos_y - drg_h,
                    left : e.pageX + pos_x - drg_w
                }).on("mouseup", function() {
                	$element.parents().unbind('mousemove');
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault();
        }).on("mouseup", function() {
            $(this).removeClass('draggable');
	        onDragEnd($(this));
        });
    }
})(jQuery);