var express = require('express');
var app		= express();

app.get('/', function(req, res) {
	res.send('halo express');
});

app.get('/wonderlabs', function(req, res) {
	res.send("<head><title>Wonderlabs</title></head><pre>Nama 		: Fadqurrosyidik</pre><pre>Sekolah		: UIN Sunan Kalijaga</pre><pre>Jurusan		: Teknik Informatika</pre><pre>Angkatan	: 2016</pre>");
});

app.listen(2828);