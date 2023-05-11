import React from "react";
import { Typography } from "@mui/material";
import LogoutButton from './MainLayout/LogoutButton/LogoutButton';


export default function AppHeader() {

    return (<div style={{ marginLeft: '15px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h5">
            {/* Shipments */}
        </Typography>
        <LogoutButton/>
    </div>)
}