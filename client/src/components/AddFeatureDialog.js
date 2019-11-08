import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


export default function DraggableDialog(props) {

  return (
      
      <Dialog
        open={props.addFeatureOpen}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Claim Parcel
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To claim this parcel, please fill-in the following informations.
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="label"
            label="Label"
            fullWidth
            onChange={props.handleLabelChange}
          />
            <TextField
            required
            autoFocus
            margin="dense"
            id="address"
            label="External Address ID"
            fullWidth
            onChange={props.handleAddressChange}
          />
            <TextField
            autoFocus
            required
            margin="dense"
            id="area"
            type="number"
            label="Area"
            fullWidth
            onChange={props.handleAreaChange}
          />
          {/* // TODO Replace with a list  */}
          <TextField
            autoFocus
            error
            margin="dense"
            id="type"
            label="Type (Building, Agriculture, Industrial, ...)"
            fullWidth
            onChange={props.handleTypeChange}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleAddFeatureDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={props.claimParcel} color="primary">
            Claim
          </Button>
        </DialogActions>
      </Dialog>
  );
}
