import './Appli.scss';
import Accueil from './Accueil';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FrmDossier from './FrmDossier';
import { useEffect, useState } from 'react';
import { observerEtatConnexion } from "../code/utilisateur";

export default function Appli() {

  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(
    ()  => observerEtatConnexion(setUtilisateur)
  , []);

  return (
    utilisateur ?
    <div className="Appli">
        <Entete utilisateur={utilisateur} />
        <section className="contenu-principal">
          <ListeDossiers />
          <FrmDossier />
          <Fab size="large" className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
            <AddIcon />
          </Fab>
        </section>
    </div>
    :
    <Accueil/>
  );
}
