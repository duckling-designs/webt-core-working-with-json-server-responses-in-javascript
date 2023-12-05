const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

document.getElementById("getWeddingLocations").addEventListener("click", fetchWeddingLocation)

async function fetchWeddingLocation() {
    const response = await fetch('https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TRAUMHOCHZEITOGD&srsName=EPSG:4326&outputFormat=json');
    const weddingLocation = await response.json();
    console.log(weddingLocation);
    getRandomLocation(weddingLocation);
}

function getRandomLocation(json) {
    let locationCount = json["features"].length;
    let randomID = Math.floor(Math.random() * locationCount) - 1;
    let output = json["features"][randomID]["properties"];
    console.log(randomID)
    document.getElementById("weddingLocation").innerHTML = output["LOCATION"] + " | " + output["ADRESSE"] + " | " + "<a href=\"" + output['WEBLINK1'] + "\">" + "Weblink zum Standesamt" + "</a><br><iframe width=\"600\" height=\"450\" style=\"border:0\" loading=\"lazy\" allowfullscreen referrerpolicy=\"no-referrer-when-downgrade\" src=\"https://www.google.com/maps/embed/v1/place?key=" + apiKey + "&q=" + json["features"][randomID]['geometry']['coordinates'][1] + "," + json["features"][randomID]['geometry']['coordinates'][0] + "\">";
}
