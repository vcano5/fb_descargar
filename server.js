const express = require('express'),
	app = express();


app.listen(process.env.PORT || 8080, ()=> {
	console.log('PUERTO 8080')
});

app.get('/descargar', (req, res) => {
	require('fb-video-downloader').getInfo(req.query.video).then(function(info) {
		if(info['download'].length > 1) {
			res.send({"messages": [ { "attachment": { "type": "video", "payload": { "url": info['download']['hd'] } }}] })
		}
		else {
			res.send({"messages": [ { "attachment": { "type": "video", "payload": { "url": info['download']['sd'] } }}] })
		}
		console.log(JSON.stringify(info, null, 2));
	})
})