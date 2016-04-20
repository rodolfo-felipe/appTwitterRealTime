"use strict";

/**
* Módulo de include global
* @author Rodolfo Felipe
* @since  19/04/2016
*/

global.include = function(location) {
	return require(__dirname + "/" + location);
};
