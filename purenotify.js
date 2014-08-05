/** purenotify.js - v0.1 - 2014/07/29
 * http://blog.bigruan.com/purenotify.js/
 * Copyright (c) 2014 Yulong Ruan - MIT
 */
(function($) {
    var defaults = {
        bgColor: '#000',
        offsetX: "10",
        offsetY: "10",
        opacity: 0.6,
        position: 'bottom-right',
        fontColor: '#fff',
        msg: 'Notice!'
    };
    var inner = 'position: absolute; padding: 10px 15px; z-index: 999;';
    var wrapper = 'position: absolute; display: inline-block; height: 0; width: 0; z-index: 1;';
    $.fn['notice'] = function(options) {
        var notification_html,
            custom_style,
            notice,
            top,
            right,
            bottom,
            left;

        options = $.extend(true, {}, defaults, options);
        top = options.position.indexOf('top') >= 0 ? 'top:' + options.offsetY + 'px;' : '';
        right = options.position.indexOf('right') >= 0 ? 'right:' + (options.offsetX - this.width()) + 'px;' : '';
        bottom = options.position.indexOf('bottom') >= 0 ? 'bottom:' + (options.offsetY - this.height()) + 'px;' : '';
        left = options.position.indexOf('left') >= 0 ? 'left:' + options.offsetY + 'px;' : '';
        custom_style = top + right + bottom + left +
            'background-color:' + options.bgColor +
            ';color:' + options.fontColor +
            ';opacity:' + options.opacity +
            ';filter:alpha(opacity=' + (options.opacity * 100) + ');';
        notice = this.find('#notice');
        if (notice.length !== 0) {
            notice.remove();
        }
        notification_html = $('<div class="notice" style="' + wrapper + '"><div style="' + inner + custom_style + '">' + options.msg + '</div></div>');
        this.prepend(notification_html);
        return this;
    };
    $.fn['removeNotice'] = function() {
        this.find('.notice').remove();
        return this;
    };
})(jQuery);
