const amarta = document.querySelector('#amarta');
const banasri = document.querySelector('#banasri');
const braja = document.querySelector('#braja');
const deb = document.querySelector('#deb');
const laxmi = document.querySelector('#laxmi');
const mani = document.querySelector('#mani');
const pritam = document.querySelector('#pritam');


var studentsRef = db.collection("student-data");

var studentsRef = db.collection("student-data").doc("Jl9EFQrxIhCxQymkCVXt");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
