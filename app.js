const amarta = document.querySelector('#amarta');
const banasri = document.querySelector('#banasri');
const braja = document.querySelector('#braja');
const deb = document.querySelector('#deb');
const laxmi = document.querySelector('#laxmi');
const mani = document.querySelector('#mani');
const pritam = document.querySelector('#pritam');



var studentsRef1 = db.collection("student-data").doc("Jl9EFQrxIhCxQymkCVXt");

studentsRef1.get().then(function(doc) {
    if (doc.exists) {
        amarta.textContent = doc.data().marks;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

var studentsRef2 = db.collection("student-data").doc("T94YkvZ1kiu7WHp4KZ1i");

studentsRef2.get().then(function(doc) {
    if (doc.exists) {
        banasri.textContent = doc.data().marks;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
