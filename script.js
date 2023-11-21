function fetchDummyData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("dummy").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    xhttp.send();
}
