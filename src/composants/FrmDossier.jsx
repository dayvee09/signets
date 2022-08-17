import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TwitterPicker } from "react-color";
import { useState } from "react";

export default function FrmDossier({ id=null, titre_p='', couverture_p='', couleur_p='#000', frmOuvert, setFrmOuvert, gererActionDossier }) {
	const [titre, setTitre] = useState(titre_p);
	const [couverture, setCouverture] = useState(couverture_p);
	const [couleur, setCouleur] = useState(couleur_p);

	function viderFermerFrm() {
		setTitre(titre_p);
		setCouverture(couverture_p);
		setCouleur(couleur_p);
		setFrmOuvert(false);
	}

	function gererSoumettre() {
		// Appeler gererActionDossier avec les valeurs du formulaire
		gererActionDossier(titre, couverture, couleur, id);

		if(id===null) {
			viderFermerFrm();
		}

		setFrmOuvert(false);
	}

	return (
		<div>
			<Dialog open={frmOuvert} onClose={viderFermerFrm}>
				<DialogTitle>Ajouter/Modifier un dossier</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="titre"
						label="Titre du dossier"
						type="text"
						fullWidth
						variant="standard"
						onChange={e => setTitre(e.target.value)}
						value={titre}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="couverture"
						label="Image couverture du dossier"
						type="text"
						fullWidth
						variant="standard"
						onChange={e => setCouverture(e.target.value)}
						value={couverture}
					/>
					<TwitterPicker
						triangle='hide'
						colors={["#900", "#090", "#009"]}
						width="auto"
						onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
						color={couleur}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={viderFermerFrm}>Annuler</Button>
					<Button onClick={gererSoumettre}>Soumettre</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
