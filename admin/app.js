const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');
const update1 = document.querySelector('#one');
const update2 = document.querySelector('#two');
const update3 = document.querySelector('#three');
const update4 = document.querySelector('#four');
const update5 = document.querySelector('#five');
const update6 = document.querySelector('#six');
const update7 = document.querySelector('#seven');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let marks = document.createElement('span');
    let cross = document.createElement('div');
   
    

    li.setAttribute('data-id', doc.id);
    li.setAttribute('data-id', doc.id);
    marks.setAttribute('type', 'number');
    
    name.textContent = doc.data().name;
    marks.textContent = doc.data().marks; 
    cross.textContent = '🗑️';

    li.appendChild(name);
    li.appendChild(marks);
    li.appendChild(cross);
    

    cafeList.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('student-data').doc(id).delete();
    });

    // updating data
    update1.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('student-data').doc('Jl9EFQrxIhCxQymkCVXt').update({
            marks: update1.marks.value
        });
        
        
    });

    update2.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('student-data').doc('T94YkvZ1kiu7WHp4KZ1i').update({
            marks: update2.marks.value
        });
        
        
    });

    update3.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('student-data').doc('EZYQNyYX0YTaJH0lXjqf').update({
            marks: update3.marks.value
        });
        
        
    });

    update4.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('student-data').doc('Yk03trXAk1WkBFJXQN45').update({
            marks: update4.marks.value
        });
        
        
    });

    update5.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('student-data').doc('qgLPYHL0mle2fF4uta82').update({
            marks: update5.marks.value
        });
        
        
    });

    update6.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('student-data').doc('O9YMcqcP9G3Yk2fizTTS').update({
            marks: update6.marks.value
        });
        
        
    });

    update7.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('student-data').doc('uvWH5dVx6xZTxz7TaWHJ').update({
            marks: update7.marks.value
        });
        
        
    });
}



// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('student-data').add({
        name: form.name.value,
        marks: form.marks.value
    });
    form.name.value = '';
    form.marks.value = '';
});

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

// updating records (console demo)
// db.collection('student-data').doc('DOgwUvtEQbjZohQNIeMr').update({
//     name: 'mario world'
// });
