var amarta = document.querySelector('#amarta');
var banasri = document.querySelector('#banasri');
var braja = document.querySelector('#braja');
var deb = document.querySelector('#deb');
var laxmi = document.querySelector('#laxmi');
var mani = document.querySelector('#mani');
var pritam = document.querySelector('#pritam');

function renderCafe(doc){
    const amarta = document.querySelector('#amarta');
    amarta.textContent = doc('Jl9EFQrxIhCxQymkCVXt').data().marks;
   

    

    // updating data
   
}

// real-time listener
db.collection('student-data').orderBy('marks').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderCafe(change.doc);
        } else if (change.type == 'removed'){
            let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
            cafeList.removeChild(li);
        }
    });
});
