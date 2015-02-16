function insertVideoIframe(video, insertInto) {
	if (!insertInto) {
		return false;
	}
	var player = document.createElement("iframe");
	player.src = location.protocol + "//www.youtube.com/embed/" + video + "?rel=0&autoplay=1&html5=1";
	player.id = "fallbackIframe";
	player.width = "100%";
	player.height = "100%";
	player.setAttribute('allowfullscreen', '');
	// Remove all childern before inserting iframe
	while (insertInto.hasChildNodes()) {
		insertInto.removeChild(insertInto.firstChild);
	}
	insertInto.appendChild(player);
	return true;
}
 
 // http://web.archive.org/web/20130807080443/http://www.techtricky.com/how-to-get-url-parameters-using-javascript/
 function getUrlParams() {
	var params = {};
	window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
		params[key] = value;
	});
	return params;
}

var url = getUrlParams();
if(url && url.v) {
	var insertInto = document.getElementById("player-api-legacy") || document.getElementById("player-api");
	if (insertInto) console.log("has insertInto");
	else console.log("no insertInto found");
	if (insertVideoIframe(url.v, insertInto)) console.log("inserted into");
	else console.log("failed insert");
	// get rid of the overlay blocking access to player
	var tb = document.getElementById("theater-background");
	if (tb) tb.remove();
}