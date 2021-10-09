import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Step00start from './step00start';
import Step01 from './step01';
import Step99end from './step99end';

const steps = [ 'はじめに'
              , '本題'
              , 'まとめ'
];
function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <Step00start />;
    case 1:
      return <Step01 />;
    case 2:
      return <Step99end />;
    default:
      step = 0;
      return <Step00start />;
      //throw new Error('Unknown step');
  }
}

function App() {

  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  document.title = "default | myu-live-sub-page";
  return (
    <Box
    sx={{
      maxWidth: 320,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
    >
    <CssBaseline />
      <Container component="main" sx={{ mt: 2, mb: 2 }} maxWidth="sm">
        <Typography variant="h5" component="h1" gutterBottom>
          やること
        </Typography>
        <Typography variant="body1">上から順に（´・ω・｀）</Typography>
      </Container>
      <Box sx={{ maxWidth: 320, paddingLeft: 2}}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label,index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                {index === activeStep && (getStepContent(activeStep))}
                <React.Fragment>
                  <Box sx={{ mb: 0 }}>
                    <div>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {activeStep === steps.length - 1 ? '終了' : '次へ'}
                      </Button>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        size="small"
                        sx={{ mt: 1, mr: 1 }}
                      >
                        戻る
                      </Button>
                    </div>
                  </Box>
                </React.Fragment>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
            <React.Fragment>
              <Paper square elevation={0} sx={{ textAlign: 'right' }}>
                <Button
                  onClick={handleReset}
                  variant="outlined"
                  size="small"
                  sx={{textAlign: 'right'}}
                  startIcon={<AutorenewIcon />}
                >
                  もう1回！
                </Button>
              </Paper>
            </React.Fragment>
        )}
      </Box>
      <Box
        component="footer"
        sx={{
          py: 0,
          px: 0,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            myu-live-sub-view.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/myu765">
        myu765
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default App;
