"use strict";

/**
* Módulo de de execução da aplicação
* @author Rodolfo Felipe
* @since  19/04/2016
*/

require("./lib/globals");

var _settings  = include("settings"),
	_config    = include("config"),
	_tweetCtrl = include("controllers/tweetController");

var _express      = require('express'),
    _app          = _express(),
    _cons         = require('consolidate'),
    _Twitter      = require('node-tweet-stream'),
    _http         = require('http').Server(_app),
    _io           = require('socket.io')(_http),
    _twitterTrack = new _Twitter(_settings.appCredencial);

_config(_app, _cons.swig, _express.static, __dirname);
_tweetCtrl(_io, _twitterTrack);

_http.listen(_settings.servidor.porta, function(){
  console.log('Servidor escutando na porta: ' + _settings.servidor.porta);
});
