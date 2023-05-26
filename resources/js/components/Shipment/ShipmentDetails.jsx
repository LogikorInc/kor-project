import { useParams } from "react-router-dom";
import { Paper, MenuItem, IconButton, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { MyContext } from '../../contexts/MyContext';
import { useEffect } from "react";

const ShipmentDetails = () => {
    const { shipmentId } = useParams();

return (
    // <Grid container spacing={2} direction="row">
    // <Grid item xs={12}>
    <Paper style={{ padding: 15, marginBottom: 15 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6">
            Details
        </Typography>
        <Typography variant="h6">
            Delivery # {shipmentId}
        </Typography>
        <Typography variant="h6">
            Carrier: Day & Ross
        </Typography>
        <Typography variant="h6">
            Carrier ETA: 12/25/2023
        </Typography>
        <Typography variant="h6">
            Date Created:
        </Typography>
        </div>
        
    </Paper>

    // </Grid>
    // </Grid>

    
);
}

export default ShipmentDetails
