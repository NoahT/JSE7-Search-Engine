//$(document).ready(init);


(function init() {
	var cx = "001892190707907696787:e20tcxfmvrc";
	var gcse = document.createElement("script");
	gcse.type = "text/javascript";
	gcse.async = true;
	gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(gcse, s);

	var key = "AIzaSyCW_bq0dqdR5pGuA5irKBJG9dAPjxnIzz4";

	$("#childOne").on("keyup", function(event) {
		if(event.which === 13) {
			var subQuery = $("input.gsc-input").val();
			asyncGETRequest("https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=" + cx + "&q=" + subQuery);
		}
	})
}());
function asyncGETRequest(query) {
	var request = new XMLHttpRequest();
	request.addEventListener("load", callback);
	request.open("GET", query);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	function callback() {
		console.log(JSON.parse(this.responseText));
	}
}