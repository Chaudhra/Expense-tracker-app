import * as firebase from 'firebase'; //* takes all named exports and dumps them to variable called firebase

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};


firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default}





//child_removed event
// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// },(e)=>{
//     console.log('error:', e);
// });

// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// },(e)=>{
//     console.log('error:', e);
// });

// // Also gets called for existing childern
// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// },(e)=>{
//     console.log('error:', e);
// });

// database.ref('notes/-M6cWFZS8dJu4j_IE8_H').remove();

// // Read data off of expense ref
// database.ref('expenses').once('value').then((snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key, //id
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });


// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key, //id
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// },(e)=>{
//     console.log('error:', e);
// });


// database.ref('expenses').push({
//     description:'asdasd',
//     note:'asdasd',
//     amount:100,
//     createdAt:1000
// });




// creating firebase entries with unique IDs
// database.ref('notes').push({
//     title:'Homework',
//     body:'Do CS361 HW'
// });

// An example of how we can't just pass in a array, we have to use an object with unqiue IDs
// const firebaseNotes = {
//     notes:{
//         'someUniqueID':{
//             title:'firt nopte',
//             body:'this is my note'
//         },
//         'someUniqueID':{
//             title:'firt nopte',
//             body:'this is my note'
//         }        
//     }
// }
// const notes = [{
//     id:12,
//     title:'firt nopte',
//     body:'this is my note'
// },{
//     id:87,
//     title:'firt nopte',
//     body:'this is my note'
// }]

// database.ref('notes').set(notes)



// database.ref().on('value',(snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`) 
// }, (e)=>{
//     console.log(e)
// });


// const onValueChange = database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// }, (e)=>{
//     console.log('error with data fetching', e);
// });

// setTimeout(()=>{
//     database.ref('age').set(99);
// }, 3500);

// Example of unsubscribing
// setTimeout(()=>{
//     database.ref().off('value',onValueChange); //unsubscribe to just onValueChange
// }, 7500);
 
// setTimeout(()=>{
//     database.ref('age').set(30);
// }, 10500);

// database.ref().once('value').then((snapshot)=>{
//     console.log(snapshot.val());
// }).catch((e)=>{
//     console.log('error:', e)
// });



// ref is short for reference, we can use it to ref different parts of the db
// Set is used on a ref to set its value
// database.ref().set({
//     name:'Adil Chaudhry',
//     age:'27',
//     stressLevel:9,
//     job:{
//         title:'product manager',
//         company:'None'
//     },
//     isSingle:true,
//     location: {
//         country:'Canada'
//     }
// }).then(()=>{
//     console.log('Data is saved');
// }).catch((error)=>{
//     console.log('This failed:', error)
// });


// database.ref('age').set(27);
// database.ref('location/city').set('Tokyo');

// database.ref('attributes').set({
//     height: 150,
//     weight:180
// }).then(()=>{
//     console.log('Data is saved for the second call');
// }).catch((error)=>{
//     console.log('This failed:', error);
// });

// //Update data, we pass in an object of the properties we want to update
// database.ref().update({
//     stressLevel:10,
//     'job/company':'Amazon',
//     'location/city':'Seattle'
// });



//Remove data
// database.ref('isSingle')
// .remove()
// .then(()=>{
//     console.log('data was removed');
// }).catch((e)=>{
//     console.log('Did not remove data',e);
// });
