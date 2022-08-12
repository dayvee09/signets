import './ListeDossiers.scss';
import Dossier from './Dossier';
import { useEffect } from 'react';
import * as dossiersModele from "../code/dossier";

export default function ListeDossiers({idUtilisateur, dossiers, setDossiers}) {

  useEffect(() =>
    () => dossiersModele.lireTout(idUtilisateur).then(
      dossiersFS => {
        setDossiers(dossiersFS);
        console.log('Dossiers retournés par Firestore : ', dossiersFS);
      }
    )
  , []);

  function supprimerDossier(idDossier) {
    dossiersModele.supprimer(idUtilisateur, idDossier).then(
      () => setDossiers(dossiers.filter(
        dossier => dossier.id !== idDossier
      ))
    );
  }

  function modifierDossier(idDossier, nvTitre, nvCouverture, nvCouleur) {
    const objetNouvellesValeursDossier = {
      titre: nvTitre,
      couverture: nvCouverture,
      couleur: nvCouleur
    }

    dossiersModele.modifier(idUtilisateur, idDossier, objetNouvellesValeursDossier).then(
      () => setDossiers(dossiers.map(
        dossier => {
          if(dossier.id === idDossier) {
            dossier.titre = nvTitre;
            dossier.couverture = nvCouverture;
            dossier.couleur = nvCouleur;
          }
          return dossier;
        }
      ))
    );
  }

  return (
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          // Remarquez l'utilisation du "spread operator" pour "étaler" les 
          // propriétés de l'objet 'dossier' reçu en paramètre de la fonction
          // fléchée dans les props du composant 'Dossier' !!
          dossier =>  <li key={dossier.id}>
                        <Dossier 
                          {...dossier} 
                          supprimerDossier={supprimerDossier} 
                          modifierDossier={modifierDossier} 
                        />
                      </li>
        )
      }
    </ul>
  );
}