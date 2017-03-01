var express = require('express');
var app		= express();

app.get('/', function(req, res) {
	res.send('halo express');
});

app.get('/nodeJS', function(req, res) {
	res.send("<head><title>NodeJS</title></head><pre>Nama 		: Khamdan Nahari</pre><pre>Sekolah		: UIN Sunan Kalijaga</pre><pre>Jurusan		: Teknik Informatika</pre><pre>Angkatan	: 2016</pre>");
});

app.listen(5000);