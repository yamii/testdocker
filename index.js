'use strict';

var Hapi = require( 'hapi');
var server = new Hapi.Server();
// testing token push
server.connection( {
	'port' : 8000
} );

server.route( [ {
	'method' : 'GET',
	'path' : '/v1/hello',
	'handler' : function ( request, reply ) {
		reply( 'hello one yami' );
	}
} ] );
server.start( function onServerStart() {
	console.log( 'starting server : ' + server.info.uri );
});
