
let band = document.getElementById("band")
let searchBand = document.getElementById("search-band")
let playButton = document.getElementById("play")
let pause = document.getElementById("pause")
let deezer = document.getElementById("deezer")

searchBand.addEventListener("click", function() {
		var bandRequest = band.value;
		var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + bandRequest,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "7127fb250cmsh0aa25dfcfb27c2bp11c565jsn1fd443c2d24e"
		}
	}
	listGroups(settings)
})



function listGroups (settings) {
	$.ajax(settings).done(function (response) {
		console.log(response.data[0].album.title);
		console.log(response.data[0].album.tracklist);
		console.log(response.data[0].link);
		console.log(response.data[0].preview);
		
		playButton.addEventListener("click", function() {
			let myAudio = new Audio();
		myAudio.src = response.data[0].preview
		myAudio.play()
		})
	});	
}




