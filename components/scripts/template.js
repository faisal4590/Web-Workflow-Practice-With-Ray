/**
 * Created by optimized faisal on 10/14/2016.
 */
$(function() {
    var Mustache = require('mustache');

    $.getJSON('js/data.json', function(data) {
        var template = $('#speakerstpl').html();
        var html = Mustache.to_html(template, data);
        $('#speakers').html(html);
    }); //getJSON

}); //function