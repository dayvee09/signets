import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TwitterPicker } from "react-color";
import { useState } from "react";

export default function FormDialog({ frmOuvert, setFrmOuvert, gererActionDossier }) {
	const [titre, setTitre] = useState('');
	const [couverture, setCouverture] = useState('');
	const [couleur, setCouleur] = useState('#000');
	

	function gererSoumettre() {
		// Appeler gererActionDossier avec les valeurs du formulaire
		gererActionDossier(titre, couverture, couleur);
		setFrmOuvert(false);
	}

	return (
		<div>
			<Dialog open={frmOuvert} onClose={() => setFrmOuvert(false)}>
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
					/>
					<TwitterPicker
						triangle='hide'
						colors={["#900", "#090", "#009"]}
						width="auto"
						onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setFrmOuvert(false)}>Annuler</Button>
					<Button onClick={gererSoumettre}>Soumettre</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
