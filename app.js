var amarta = document.querySelector('#amarta');
var banasri = document.querySelector('#banasri');
var braja = document.querySelector('#braja');
var deb = document.querySelector('#deb');
var laxmi = document.querySelector('#laxmi');
var mani = document.querySelector('#mani');
var pritam = document.querySelector('#pritam');

function renderCafe(doc){
    const amarta = document.querySelector('#amarta');
    amarta.textContent = doc().data().marks;
   

    

    // updating data
   
}

db.collection('student-data').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});
