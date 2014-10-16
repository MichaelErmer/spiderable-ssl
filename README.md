# Spiderable-SSL

If you're getting some problems to index your application with `spiderable`
[due to SSL errors](https://groups.google.com/forum/#!msg/meteor-talk/dPLss2idrJg/Dd4qL9O9d6AJ),
you can add this package with:

    meteor add gentlenode:spiderable-ssl
    meteor remove spiderable # don't forget to remove the official package

This will ask [phantomjs](http://phantomjs.org/) to ignore every ssl
error during the page rendering (--ignore-ssl-errors=yes).

[You can use the script at the bottom of this page](http://www.meteorpedia.com/read/spiderable/)
to check that the HTML code is returned by your application and appears in your terminal.
