"use strict";

/**
* Módulo de escuta dos tweets filtrados
* @author Rodolfo Felipe
* @since  19/04/2016
*/

module.exports = function(socket, twitterStream) {
	
	/**
	* Socket de escuta em comunicação com a view e tracker 
	* dos tweets
	*/
	socket.on('connection', function(openSocket){
		var _sTermoAnterior = undefined;

		openSocket.on('buscar', function(sTermo){
			if (_sTermoAnterior != undefined) {
				twitterStream.untrack(_sTermoAnterior);
			}

			twitterStream.track(sTermo);
			_sTermoAnterior = sTermo;
		});
	});

	/**
	* Envio dos tweets filtrados para a view pelo socket
	*/
	twitterStream.on('tweet', function (tweet) {
		socket.emit('tweetCapturado', tweet);
	});
};