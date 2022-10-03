import { Typography } from '@mui/material';
import './App.css';
import Flexbox from './components/Flexbox';
import Lines from './components/Lines';
import manuscript from './images.jpeg';

function App() {

  return (
    <div style={{ backgroundColor: '#606164', width: '100%', height: '100%', position: 'absolute' }} >
      <Flexbox style={{padding: '32px'}} fullHeight={false} fullWidth={false} gap="large" direction='column' justify='space-around'>
        <Typography variant="h5">Logographic / Ideograms / Voynich Manuscript</Typography>
          <img style={{ width: '100%', filter: 'grayscale(1) opacity(0.6)' }} src={manuscript} alt="logo" />
        <div>
          <Lines />
        </div>
      </Flexbox>
    </div>
  );
}

export default App;
