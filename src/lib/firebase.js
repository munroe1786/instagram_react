import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBCNOLK5jyBMKNXOi-yFvHUfJNDJy3YsRM',
  authDomain: 'instagram-31a21.firebaseapp.com',
  projectId: 'instagram-31a21',
  storageBucket: 'instagram-31a21.appspot.com',
  messagingSenderId: '892942058224',
  appId: '1:892942058224:web:268e22abd657fdb3a5b835'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
