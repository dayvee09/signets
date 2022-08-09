import './Dossier.scss'; 
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function Dossier({id, titre, couleur, couverture, dateAjout}) {
  // État du menu contextuel de chaque dossier
  const [eltAncrage, setEltAncrage] = useState(null);
  const menuContextuelOuvert = Boolean(eltAncrage);

  function gererMenuContextuel(evt) {
    setEltAncrage(evt.currentTarget);
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
        onClose={()=>setEltAncrage(null)}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        transformOrigin={{vertical: 'bottom', horizontal: 'right'}}
      >
        <MenuItem>Modifier</MenuItem>
        <MenuItem>Supprimer</MenuItem>
      </Menu>
    </article>
  );
}