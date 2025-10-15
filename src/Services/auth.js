
import { 
  auth 
} from "../config/firebase";
import { 
  setPersistence, 
  browserSessionPersistence, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";


setPersistence(auth, browserSessionPersistence);


export const registerUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};


export const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};



