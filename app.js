const amarta = document.querySelector('#amarta');
const banasri = document.querySelector('#banasri');
const braja = document.querySelector('#braja');
const deb = document.querySelector('#deb');
const laxmi = document.querySelector('#laxmi');
const mani = document.querySelector('#mani');
const pritam = document.querySelector('#pritam');


var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});
