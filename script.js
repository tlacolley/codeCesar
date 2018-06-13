
// var main = document.getElementById("main");

var alphaClair = "abcdefghijklmnopqrstuvwxyz";

var shift = 80

var mot = "bonjour"
console.log(mot);
var crypt = ""

for (var i = 0; i < mot.length; i++) {
    // console.log(mot[i]);
            // for (var j = 0; j < alphaClair.length; j++) {
            //     if(mot[i] === alphaClair[j]){
            //         ;
            //     }
                var indexMot = alphaClair.indexOf(mot[i])
                // console.log(alphaClair.indexOf(mot[i]))
            // }
                var newIndex = (indexMot + shift) % 26
                // console.log(newIndex);
                var newMot = alphaClair[newIndex]

                crypt += newMot
    // crypt += mot[i] + shift
}



console.log(crypt);
