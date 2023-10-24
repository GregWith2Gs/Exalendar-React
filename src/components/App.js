import Home from './Home.js'
import Login from './Login.js';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <header className="App-header">
        {/* <Login/> */}
          <Home/>
        </header>
      </div>
    </LocalizationProvider>
    
  );
}

export default App;
