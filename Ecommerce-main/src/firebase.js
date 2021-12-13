import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAAoRMtqe66ENKYh9xhYhcfF16cgBX2itk",
    authDomain: "coder-react-a912e.firebaseapp.com",
    projectId: "coder-react-a912e",
    storageBucket: "coder-react-a912e.appspot.com",
    messagingSenderId: "902903189869",
    appId: "1:902903189869:web:4956f451cf800c0ff90a64"
  };

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}

