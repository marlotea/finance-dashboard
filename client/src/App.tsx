import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '@/scenes/navbar';
import Dashboard from '@/scenes/dashboard';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            width="100%"
            minHeight="100vh"
            padding="1rem 2rem"
            paddingBottom="4rem"
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/predictions"
                element={<div>predictions page</div>}
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
