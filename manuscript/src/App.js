import './App.css';
import Flexbox from './components/Flexbox';
import Lines from './components/Lines';
import manuscript from './images.jpeg';

function App() {

  return (
    <div style={{ backgroundColor: '#606164', width: '100%', height: '100%', position: 'absolute' }} >
      <Flexbox gap="large" direction='row' justify='space-around'>
        <div style={{ flex: '0 0 50%' }}>
          <img style={{ width: '100%' }} src={manuscript} alt="logo" />
        </div>
        <div>
          <Lines />
        </div>
      </Flexbox>
    </div>
  );
}

export default App;
