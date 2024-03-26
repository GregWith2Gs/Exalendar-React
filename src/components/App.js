import Layout from './Layout.js'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get(
      "access_token"
    );

    axios
      .get("http://localhost:8010/proxy/user", {
        headers: {
          Authorization: "token " + token,
        },
      })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem('user, res.data');
        setLoggedIn(true);
        localStorage.setItem('loggedIn', true)
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);
  
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
