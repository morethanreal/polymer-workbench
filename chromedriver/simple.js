var wd = require('wd');

var browser = wd.remote({
	host: 'localhost',
	port: 9515,
	path: '/'
});
browser.init({
	chromeOptions: {
		androidPackage: 'com.android.chrome'
	}
}, function() {
	browser.get('http://www.polymer-project.org');
});
