var t1 = new Date();
for (var i = 0; i < 1000; i++) {
	document.write('<script src="foo.js?' + Math.random() + '"></script>');
}
var t2 = new Date();
document.write(t2 - t1);