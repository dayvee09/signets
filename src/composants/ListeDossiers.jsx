import './ListeDossiers.scss';
import Dossier from './Dossier';
import { useEffect } from 'react';
import * as dossiersModele from "../code/dossiers";

export default function ListeDossiers({idUtilisateur, dossiers, setDossiers}) {

  useEffect(() =>
    () => dossiersModele.lireTout(idUtilisateur).then(
      dossiersFS => {
        setDossiers(dossiersFS);
        console.log('Dossiers retournés par Firestore : ', dossiersFS);
      }
    )
  , []);

  return (
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          // Remarquez l'utilisation du "spread operator" pour "étaler" les 
          // propriétés de l'objet 'dossier' reçu en paramètre de la fonction
          // fléchée dans les props du composant 'Dossier' !!
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}