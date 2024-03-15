import Layout from './Layout.js'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const theme = createTheme({
  palette: {
    primary: {
      main: "#4c87b0"
    },
    secondary: {
      main: "#494c7d"
    }
  }
});


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <div className="App">
        <header className="App-header">
          <Layout/>
        </header>
      </div>
      </ThemeProvider>
    </LocalizationProvider>
    
  );
}

export default App;
