(function($) {
    var defaults = {
        bgColor: '#000',
        offsetX: 10,
        offsetY: 10,
        fontColor: '#fff',
        msg: 'Notice!'
    };
    var inner = 'position: absolute; top: 10px; left: 10px; padding: 10px 15px; background-color: #000; color: #fff; opacity: 0.6; filter: alpha(opacity=60); /* For IE8 and earlier */ z-index: 999;';
    var wrapper = 'position: absolute; display: inline-block; height: 0; width: 0; z-index: 1;';
    $.fn['notice'] = function(options) {
        var notification_html, custom_style, notice;
        options = $.extend(true, {}, defaults, options);
        custom_style = 'top:' + options.offsetY + 'px;left:' + options.offsetX + 'px;background-color:' + options.bgColor + ';color:' + options.fontColor + ';';
        notice = this.find('#notice');
        if(notice.length !== 0) {
            notice.remove();
        }
        notification_html = '<div class="notice" style="' + wrapper + '"><div style="' + inner +  custom_style + '">' + options.msg + '</div></div>';
        this.prepend(notification_html);
        return this;
    };
    $.fn['removeNotice'] = function() {
        this.find('.notice').remove();
        return this;
    };
})(jQuery);
