function convertTemp() {

    let degree = document.getElementById("degree").value;
    let type = document.getElementById("type").value;
    let output = document.getElementById("output");

    if (degree === "" || isNaN(degree)) {
        alert("Please enter a valid number");
        return;
    }

    degree = Number(degree);

    let result = "";

    if (type === "fahrenheit") {
        let c = (degree - 32) * 5 / 9;
        result = c.toFixed(4) + " °C";
    }

    else if (type === "celsius") {
        let f = (degree * 9 / 5) + 32;
        result = f.toFixed(4) + " °F";
    }

    else if (type === "kelvin") {
        let c = degree - 273.15;
        result = c.toFixed(4) + " °C";
    }

    output.innerHTML = result;
}