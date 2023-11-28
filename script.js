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
    document.getElementById("weddingLocation").innerHTML =
        output["LOCATION"] + " | " + output["ADRESSE"] + " | " + "<a href=\"" + output['WEBLINK1'] + "\">" + "Weblink zum Standesamt" + "</a>";
}