

var alphaClair = "abcdefghijklmnopqrstuvwxyz";

var shift = 80;

var mot = "bonjour";
console.log(mot);
var crypt = "";

for (var i = 0; i < mot.length; i++) {

    var indexMot = alphaClair.indexOf(mot[i]);

    var newIndex = (indexMot + shift) % 26;

    var newMot = alphaClair[newIndex];

    crypt += newMot;

}



console.log(crypt);
