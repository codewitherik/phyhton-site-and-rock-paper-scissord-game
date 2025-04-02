document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector(".Button");

    button.addEventListener("click", function(){
        window.location.href = "https://www.deepl.com/translator";
    });
});

function changeTheColor(){
    document.getElementById('change').style.color = "red";
}
function writeWorld(){
    document.getElementById('Hello').innerText = "Hello World";
    document.getElementById('Hello').style.backgroundColor = "red";
};

var textVisible = false;

function toPopupText() {
// Holen Sie sich das <p>-Element nach seiner ID
var paragraph = document.getElementById("text");

// Holen Sie sich den Button nach seiner Klasse
var button = document.querySelector(".buttonScript");

// Wenn der Text sichtbar ist, verbergen Sie ihn, ändern Sie die Button-Farbe und aktualisieren Sie den Status
if (textVisible) {
    paragraph.innerText = " "; // Text verbergen
    button.style.backgroundColor = "yellow"; // Button-Farbe zurücksetzen
    textVisible = false; // Status aktualisieren
} else {
    // Text anzeigen
    paragraph.innerText = "Hello, I'm here"; // Text aktualisieren
    button.style.backgroundColor = "red"; // Button-Farbe auf Rot ändern
    textVisible = true; // Status aktualisieren
}
}