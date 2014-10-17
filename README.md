# Spiderable-SSL

If you're getting some problems to index your application with `spiderable`
[due to SSL errors](https://groups.google.com/forum/#!msg/meteor-talk/dPLss2idrJg/Dd4qL9O9d6AJ),
you can add this package with:

    meteor add gentlenode:spiderable-ssl

    # don't forget to remove the official package
    meteor remove spiderable

This will tell [phantomjs](http://phantomjs.org/) to use TLSv1 as protocol.
If it is not still working for you, remove the option `--ssl-protocol=tlsv1`
and use `--ignore-ssl-errors=yes` ignore all ssl errors during the page rendering.

[You can use the script at the bottom of this page](http://www.meteorpedia.com/read/spiderable/)
to check that the HTML code is returned by your application and appears on your terminal.
