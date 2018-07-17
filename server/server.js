var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require ('body-parser');
/**
 * Simple Express Server Application
 */
module.exports = function() {
    // Read an environment variable PORT, if null use 4200
    const PORT = process.env.PORT || 4200;
    
    // Main context
    var that = this;

    var server;
    var app;

    /**
     * Init
     */
    function init() {
        app = express();
        server = http.createServer({}, app);
    }

    /**
     * Configure server
     */
    function configure() {
        app.use('/api', bodyParser.json());
        app.set('port', PORT);
        app.use(express.static(path.join(__dirname, '../')));
    }

    /**
     * Configure, listen, and start server wrapper
     */
    function startServer() {
        configure();
        server.listen(PORT, function() {
            console.log("Server started on port :" + PORT);
        });
    }

    init();
    
    /**
     * Return a function to startup and configure the server
     */
    return {
        startServer: startServer
    };
};
