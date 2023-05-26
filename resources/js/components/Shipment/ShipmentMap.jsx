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

const ShipmentMap = ({ data }) => {

    return (
        <Card sx={{height: '100%', bgcolor: '#ffffff' }} style={{ padding: 15, marginBottom: 15 }}>
            <CardHeader
                title="Map"

            />
            <iframe src={`http://ape.logikor.com/trucks/logikmap.php?customer=TTCA&load=L1489136`} width="100%" height="100%" frameborder="0" style={{ border: 'none' }}></iframe>
        </Card>
    );

};

export default ShipmentMap;
