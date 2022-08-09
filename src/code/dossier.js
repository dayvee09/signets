import { bdFirestore } from "./init";
import { getDocs, query, collection, orderBy, addDoc, getDoc, Timestamp } from "firebase/firestore";

// Read
export async function lireTout(idUtilisateur) {
    const dossiers = await getDocs(
        query(collection(bdFirestore, 'utilisateurs', idUtilisateur, 'dossiers')
            , orderBy('titre', 'desc'))
    )
    return dossiers.docs.map(doc => ({id: doc.id, ...doc.data()}))
}

// Create
export async function creer(idUtilisateur, infoDossier) {
    infoDossier.dateAjout = Timestamp.now();
    let refDoc = await addDoc(collection(bdFirestore, 'utilisateurs', idUtilisateur, 'dossiers'), infoDossier);
    return await getDoc(refDoc);
}