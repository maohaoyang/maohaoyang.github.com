var myLat = 0;
var myLng = 0;
if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(function (position) {
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;
		console.log(myLat);
		console.log(myLng);
});
}
else {
		alert("Geolocation is not supported by your web browser.  What a shame!");
};

var 1 = document.getElementById('year');
var 2 = document.getElementById('make');
var 3 = document.getElementById('model');
var 4 = document.getElementById('body_style');
var 5 = document.getElementById('mileage');
var 6 = document.getElementById('price_origin');
var 7 = document.getElementById('price_sell');
var 8 = document.getElementById('name1');
var 9 = document.getElementById('name2');
var 10 = document.getElementById('age');
var 11 = document.getElementById('phone');
var 12 = document.getElementById('email');

$.post ('/submit.json', 
{ year: 1, 
make: 2,
model : 3
bodystyle : 4
mileage : 5
pricewhenpurchase : 6
price : 7
sellerfirstname : 8
sellerlastname : 9
age : 10
phonenumber : 11
email : 12
lat : myLat,
long : myLng } );
