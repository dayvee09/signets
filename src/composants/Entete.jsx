import './Entete.scss';
import Avatar from '@mui/material/Avatar';
import avatarImg from '../images/avatar.png';
import { deconnexion } from "../code/utilisateur";

export default function Entete({utilisateur}) {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="utilisateur">
        {utilisateur.displayName} 
        <span onClick={deconnexion}>&nbsp;(deconnexion)</span>
        <Avatar className="avatar" alt={utilisateur.displayName} src={utilisateur.photoURL} />
      </div>
    </header>
  );
}