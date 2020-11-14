function renderCafe(doc){
    const amarta = document.querySelector('#amarta');
const banasri = document.querySelector('#banasri');
const braja = document.querySelector('#braja');
const deb = document.querySelector('#deb');
const laxmi = document.querySelector('#laxmi');
const mani = document.querySelector('#mani');
const pritam = document.querySelector('#pritam');
    
    amarta.textContent = doc().data().marks;
   

    

    // updating data
   
}
db.collection('student-data').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});

