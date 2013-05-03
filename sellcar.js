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
