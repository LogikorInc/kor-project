import { useParams } from "react-router-dom";
import { Paper, MenuItem, IconButton, TextField, Typography } from "@mui/material";
import Grid from '@material-ui/core/Grid';

const ShipmentDetails = () => {
    const { shipmentId } = useParams();
return (
    <Grid container spacing={2} direction="row">
    <Grid item md={3}>
    <Paper style={{ padding: 15, marginBottom: 15 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6">
            Details
        </Typography>
        <Typography variant="h6">
            Delivery # {shipmentId}
        </Typography>
        </div>
        
    </Paper>

    </Grid>
    </Grid>

    
);
}

export default ShipmentDetails
