$ = require('jquery');
url = 'http://siwei.me'
$(function(){
  $.get(url, function(data) {
    alert(data);
    $('body').append("<p>#{data}</p>")
  })
})

