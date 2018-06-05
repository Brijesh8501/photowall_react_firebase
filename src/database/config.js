import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyD6fuEqNaPiepQjIK_xQSvrOfQKF79gb5g",
    authDomain: "photowall-73c0f.firebaseapp.com",
    databaseURL: "https://photowall-73c0f.firebaseio.com",
    projectId: "photowall-73c0f",
    storageBucket: "photowall-73c0f.appspot.com",
    messagingSenderId: "685619927410"
};

firebase.initializeApp(config)

const database = firebase.database()

export default database