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

const ShipmentInsurance = ({ data }) => {

    return (
        <Card style={{ padding: 15, marginBottom: 15 }}>
            <CardHeader
                title="Insurance"

            />
        </Card>
    );

};

export default ShipmentInsurance;
