import React, { useState, useRef, useEffect, useMemo, useCallback, useContext} from 'react';
import { useParams } from "react-router-dom";
import { Paper, MenuItem, IconButton, TextField, Typography } from "@mui/material";
import ShipmentDetails from "./ShipmentDetails";
import Button from '@mui/material/Button';
import ShipmentHistory from "./ShipmentHistory";
import ShipmentSummary from "./ShipmentSummary";
import ShipmentInsurance from "./ShipmentInsurance";
import ShipmentPP from "./ShipmentPP";
import ShipmentCustoms from "./ShipmentCustoms";
import ShipmentCompliance from "./ShipmentCompliance";
import ShipmentAnalytics from "./ShipmentAnalytics";
import ShipmentMap from "./ShipmentMap";
import Grid from '@mui/material/Unstable_Grid2';
import { MyContext } from '../../contexts/MyContext';
const ShipmentPane = () => {
    const { shipmentId } = useParams();

    const { getShipment, rootState } = useContext(MyContext);

    const { shipment } = rootState;

    useEffect(() => {
        
        getShipment(shipmentId);
        
    },[shipmentId])
return (
    <>
            <Grid container spacing={2}>
            <Grid item xs={12}>
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
    </Grid>
    <Grid item xs={12} container>
    <Grid item xs container direction="column" spacing={3}>
    <Grid item xs={4}>
    <ShipmentDetails />
    </Grid>
    <Grid item xs={8}>
    <ShipmentHistory />
    
        {shipment.map((row) => {
           return <ShipmentSummary data={row}/>
        })}
        <ShipmentInsurance />
        <ShipmentPP />
        <ShipmentCustoms />
        <ShipmentCompliance />
        <ShipmentAnalytics />
        <ShipmentMap />
    
    
    </Grid>
    </Grid>
    </Grid>
    </Grid>

    
    </>
    
    
);
}

export default ShipmentPane
