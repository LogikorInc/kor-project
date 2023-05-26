import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Paper, MenuItem, IconButton, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

const steps = [
    'Booked',
    'In Transit',
    'Delivered',
  ];

export default function HorizontalLabelPositionBelowStepper() {
    return (
        // <Grid container spacing={2} direction="row">
        // <Grid item xs={12}>
        <Paper style={{ padding: 15, marginBottom: 15 }}>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      </Paper>

// </Grid>
// </Grid>
    );
  }