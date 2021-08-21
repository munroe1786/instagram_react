import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here is where I want to import the seed file

const config = {};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE)
// seedDatabase(firebase);

export { firebase, FieldValue };
