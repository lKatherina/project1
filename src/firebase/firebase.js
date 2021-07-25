import firebase from "firebase";
import "firebase/database";
import { firebaseConfig } from "../config/firebase"

firebase.initializeApp(firebaseConfig);

export default firebase.database();