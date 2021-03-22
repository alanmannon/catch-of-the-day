import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

  // Insert your DB here
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;