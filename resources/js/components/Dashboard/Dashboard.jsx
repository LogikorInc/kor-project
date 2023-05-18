import React from "react";
import user from "../../auth/User";
import {Container, Grid, Paper, Typography} from "@mui/material";
import MainLayout from "../MainLayout/MainLayout";
import ShipmentTable from '../Shipment/ShipmentTable';

function Dashboard() {
    return (<>
        {/* // <MainLayout title={"Logikor"}> */}
            {/* <Grid container justifyContent={"center"}> */}
                {/* <Grid item>
                    <Typography variant={"h5"}>
                        Hello {user.name}, you're logged in!
                    </Typography> */}
                    <ShipmentTable />
                {/* </Grid> */}
            {/* </Grid> */}
        {/* // </MainLayout> */}
        </>
    )
}

export default Dashboard