import React, {
    useState,
    useRef,
    useEffect,
    useMemo,
    useCallback,
    useContext,
} from "react";
import { useParams } from "react-router-dom";
import {
    Paper,
    Card,
    MenuItem,
    IconButton,
    TextField,
    Typography,
    Divider,
    Button,
    Collapse,
    CardHeader,
    CardContent,
    CardActions
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { MyContext } from "../../contexts/MyContext";

const ShipmentSummary = ({ data }) => {
    const { shipmentId } = useParams();

    // const { getShipment, rootState } = useContext(MyContext);
    // const { shipment } = rootState;
    // const [shipmentData, setShipmentData] = useState([]);
    // const [rows, setRows] = useState(shipmentData);
    // const arr = []
    console.log(data);
    // Object.keys(data).forEach(key => arr.push({name: key, value: data[key]}))
    // console.log(arr[0].value);
    // useEffect(() => {
    //     // console.log(shipmentData[0]);
    //     setRows(shipmentData);
    // }, [shipmentData]);

    // useEffect(() => {

    //     getShipment(shipmentId);

    // },[shipmentId])

    // useEffect(() => {
    //     console.log(shipment);
    //     setShipmentData(shipment)
    //   }, [shipment])
    return (
        <Card style={{ padding: 15, marginBottom: 15 }}>
            <CardHeader
                title="Shipment Summary"

            />

            {/* <Typography variant="h6">Shipment Summary {shipmentId}</Typography> */}
            {/* <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse> */}
            <Grid container>
                <Grid item xs>
                    <Typography variant="h6">Ship To</Typography>
                    <Button variant="contained">Edit Location</Button>
                    <Typography variant="subtitle1">
                        {data.origin_name}
                    </Typography>
                    <Typography variant="body1">
                        Location Code: {data.origin_code}
                    </Typography>
                    <Typography variant="body1">
                        {data.origin_address_1}
                    </Typography>
                    <Typography variant="body1">
                        {data.origin_city}, {data.origin_state},{" "}
                        {data.origin_country}
                    </Typography>
                    <Typography variant="body1">{data.origin_zip}</Typography>
                </Grid>
                <Divider orientation="vertical" flexItem>
                    {/* VERTICAL */}
                </Divider>
                <Grid item xs>
                    <Typography variant="h6">Ship From</Typography>
                    <Button variant="contained">Edit Location</Button>
                    <Typography variant="subtitle1">
                        {data.dest_name}
                    </Typography>
                    <Typography variant="body1">
                        Location Code: {data.dest_code}
                    </Typography>
                    <Typography variant="body1">
                        {data.dest_address_1}
                    </Typography>
                    <Typography variant="body1">
                        {data.dest_city}, {data.dest_state}, {data.dest_country}
                    </Typography>
                    <Typography variant="body1">{data.dest_zip}</Typography>
                </Grid>
            </Grid>
            {/* </Collapse> */}
        </Card>
    );
};

export default ShipmentSummary;
