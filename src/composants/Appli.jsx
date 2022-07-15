import './Appli.scss';
import Accueil from './Accueil';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FrmDossier from './FrmDossier';
import { useEffect, useState } from 'react';
import { observerEtatConnexion } from "../code/utilisateur";
import { creer } from "../code/dossiers";

export default function Appli() {
  const [utilisateur, setUtilisateur] = useState(null);

  // État des dossiers de l'utilisateur
  const [dossiers, setDossiers] = useState([]);

  // État du "dialogue" formulaire d'ajout/modification de dossiers
  const [frmOuvert, setFrmOuvert] = useState(false);

  function ajouterDossier(titre, couverture, couleur) {
    console.log('Valeurs du formulaire : ', titre, '/', couverture, '/', couleur);
    creer(utilisateur.uid, {
      titre: titre,
      couverture: couverture,
      couleur: couleur
    }).then(
      doc => setDossiers([{id: doc.id, ...doc.data()}, ...dossiers])
    )
  }

  useEffect(
    ()  => observerEtatConnexion(setUtilisateur)
  , []);

  return (
    utilisateur ?
    <div className="Appli">
        <Entete utilisateur={utilisateur} />
        <section className="contenu-principal">
          <ListeDossiers idUtilisateur={utilisateur.uid} dossiers={dossiers} setDossiers={setDossiers} />
          <FrmDossier frmOuvert={frmOuvert} setFrmOuvert={setFrmOuvert} gererActionDossier={ajouterDossier} />
          <Fab onClick={()=>setFrmOuvert(true)} size="large" className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
            <AddIcon />
          </Fab>
        </section>
    </div>
    :
    <Accueil/>
  );
}
