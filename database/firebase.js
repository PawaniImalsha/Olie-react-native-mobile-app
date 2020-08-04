// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCmcSpMg-dgmgvLQ-8nxTIqKz2E_VPGgYw",
    authDomain: "olie-react-native-e3f26.firebaseapp.com",
    databaseURL: "https://olie-react-native-e3f26.firebaseio.com",
    projectId: "olie-react-native-e3f26",
    storageBucket: "olie-react-native-e3f26.appspot.com",
    messagingSenderId: "1067185410748",
    appId: "1:1067185410748:web:cd4b3a148c4ea7d504f6b9",
    measurementId: "G-J960TX0RLP"
};

firebase.initializeApp(firebaseConfig);

export default firebase;