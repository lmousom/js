const amarta = document.querySelector('#amarta');
const banasri = document.querySelector('#banasri');
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


var studentsRef3 = db.collection("student-data").doc("EZYQNyYX0YTaJH0lXjqf");



var studentsRef4 = db.collection("student-data").doc("Yk03trXAk1WkBFJXQN45");

studentsRef4.get().then(function(doc) {
    if (doc.exists) {
        deb.textContent = doc.data().marks;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


var studentsRef5 = db.collection("student-data").doc("qgLPYHL0mle2fF4uta82");

studentsRef5.get().then(function(doc) {
    if (doc.exists) {
        laxmi.textContent = doc.data().marks;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


var studentsRef6 = db.collection("student-data").doc("O9YMcqcP9G3Yk2fizTTS");

studentsRef6.get().then(function(doc) {
    if (doc.exists) {
        mani.textContent = doc.data().marks;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


var studentsRef7 = db.collection("student-data").doc("uvWH5dVx6xZTxz7TaWHJ");

studentsRef7.get().then(function(doc) {
    if (doc.exists) {
        pritam.textContent = doc.data().marks;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
