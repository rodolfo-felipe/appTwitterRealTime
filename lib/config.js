"use strict";

/**
* Módulo de configuração
* @author Rodolfo Felipe
* @since  19/04/2016
*/

module.exports = function(app, swig, expressStatic, dirName) {
	
	/**
	* Configuração de renderização de views
	*/
	app.engine('html', swig);
	app.set('view engine','html');
	app.set('views', dirName+'/views');
	
	/**
	* Definição de path estáticos para Css, Imagens e Js
	*/
	app.use('/public', expressStatic(dirName + '/public'));

	/**
	* Configuração de rota
	*/
	app.get('/', function(req, res){
	  res.render('index');
	});
};