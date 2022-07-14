import { authFirebase, authGoogle, bdFirestore } from "./init";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export function connexion() {
    signInWithPopup(authFirebase, authGoogle);
}

export function observerEtatConnexion(mutateurEtatUtilisateur) {
    onAuthStateChanged(authFirebase, 
        util => {
            if(util) {
                //sauvegarderProfil(util);
            }

            mutateurEtatUtilisateur(util);
            console.log('Utilisateur', util);
        }
    )
}

export function deconnexion() {
    authFirebase.signOut();
}