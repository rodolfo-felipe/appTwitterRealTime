"use strict";

/**
* M�dulo de configura��o
* @author Rodolfo Felipe
* @since  19/04/2016
*/

module.exports = function(app, swig, expressStatic, dirName) {
	
	/**
	* Configura��o de renderiza��o de views
	*/
	app.engine('html', swig);
	app.set('view engine','html');
	app.set('views', dirName+'/views');
	
	/**
	* Defini��o de path est�ticos para Css, Imagens e Js
	*/
	app.use('/public', expressStatic(dirName + '/public'));

	/**
	* Configura��o de rota
	*/
	app.get('/', function(req, res){
	  res.render('index');
	});
};