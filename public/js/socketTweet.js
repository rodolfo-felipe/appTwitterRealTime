var socket = io();
$('form').submit(function(){
	var sTermo =  $('#txtTermo').val();
	$('#txtTermoBuscado').empty();
	$('#txtTermo').val('');
	$('#txtTermoBuscado').append($('<b>').text(sTermo));
	socket.emit('buscar', sTermo);

	$('#lista_tweets').empty();
	socket.on('tweetCapturado', function(tweet){
		var txtTweet = '<li class="lead h6"><b>Nome:</b> ' + tweet.user.name + '</br>' + '<b>Tweet:</b> ' + tweet.text + '</li>';
		$('#lista_tweets').append(txtTweet);
	});
	return false;
});
