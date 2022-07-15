import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TwitterPicker } from "react-color";

export default function FormDialog() {

  return (
    <div>
      <Dialog open={true}>
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
          />
          <TextField
            autoFocus
            margin="dense"
            id="couverture"
            label="Image couverture du dossier"
            type="text"
            fullWidth
            variant="standard"
          />
          <TwitterPicker 
            triangle='hide'
			colors={["#900", "#090", "#009"]}
			width="auto"
            />
        </DialogContent>
        <DialogActions>
          <Button>Annuler</Button>
          <Button>Soumettre</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
