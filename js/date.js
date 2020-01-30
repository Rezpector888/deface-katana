var months = new makeArray('JANUARY','FABRUARY','MARCH','APRIL','MAY',
'JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER');
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
function makeArray() {
	var site = document.getElementById('date');
	for (i = 0; i<makeArray.arguments.length; i++)
	this[i + 1] = makeArray.arguments[i];
}
document.write(":"+day+ " " +months[month] + ", " + year);
makeArray()
