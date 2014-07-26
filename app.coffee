alert($('body h1').html());
url = 'http://siwei.me'

$.get(url, (data)->
    body.append("<p>#{data}</p>")
)


