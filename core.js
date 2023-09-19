//inladen fs
const fs = require('fs');

//eerst bestand laten aanmaken, dan het tekst
fs.writeFileSync("newTextFile.txt", "Dit is de weggeschreven tekst");