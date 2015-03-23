'use strict';

var Hapi = require( 'hapi');
var server = new Hapi.Server();

server.connection( {
	'port' : 8000
} );

server.start( function onServerStart() {
	console.log( 'starting server : ' + server.info.uri );
});
