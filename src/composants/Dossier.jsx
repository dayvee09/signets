import './Dossier.scss'; 
import FrmDossier from './FrmDossier';
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function Dossier({id, titre, couleur, couverture, dateAjout, supprimerDossier, modifierDossier}) {
  // État du menu contextuel de chaque dossier
  const [eltAncrage, setEltAncrage] = useState(null);
  const menuContextuelOuvert = Boolean(eltAncrage);

  // État du formulaire de modification
  const [frmOuvert, setFrmOuvert] = useState(false);

  function gererMenuContextuel(evt) {
    setEltAncrage(evt.currentTarget);
  }

  function afficherFormulaireDossier() {
    setFrmOuvert(true);
    gererFermerMenuContextuel();
  }

  function gererFermerMenuContextuel() {
    setEltAncrage(null);
  }

  function gererSupprimer() {
    supprimerDossier(id);
    gererFermerMenuContextuel();
  }

  return (
    // Remarquez l'objet JS donné à la valeur de l'attribut style en JSX, voir : 
    // https://reactjs.org/docs/dom-elements.html#style
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon />
        </IconButton>
        <img src={couverture} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié : {new Date(dateAjout.seconds*1000).toLocaleDateString()}</p>
      </div>
      <IconButton onClick={gererMenuContextuel} className="modifier" aria-label="modifier" size="small">
        <MoreVertIcon />
      </IconButton>
      <Menu
        open={menuContextuelOuvert}
        anchorEl={eltAncrage}
        onClose={gererFermerMenuContextuel}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        transformOrigin={{vertical: 'bottom', horizontal: 'right'}}
      >
        <MenuItem onClick={afficherFormulaireDossier}>Modifier</MenuItem>
        <MenuItem onClick={gererSupprimer}>Supprimer</MenuItem>
      </Menu>

      <FrmDossier 
        frmOuvert={frmOuvert} 
        setFrmOuvert={setFrmOuvert} 
        id={id} 
        titre_p={titre} 
        couleur_p={couleur} 
        couverture_p={couverture} 
        gererActionDossier={modifierDossier}
      />
    </article>
  );
}