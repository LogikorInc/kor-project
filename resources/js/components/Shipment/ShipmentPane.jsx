import { useParams } from "react-router-dom";
import { Paper, MenuItem, IconButton, TextField, Typography } from "@mui/material";
import ShipmentDetails from "./ShipmentDetails";
import Button from '@mui/material/Button';
import ShipmentHistory from "./ShipmentHistory";
const ShipmentPane = () => {
    const { shipmentId } = useParams();
return (
    <>
    <Paper style={{ padding: 15, marginBottom: 15 }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}> 
            <Typography variant="h6">
            Shipment #: {shipmentId}
            </Typography>
            <Button variant="contained" color="error">
            Expedite
            </Button> 
        </div>
        

        

    </Paper>
    <ShipmentDetails />
    <ShipmentHistory />
    </>
    
    
);
}

export default ShipmentPane
