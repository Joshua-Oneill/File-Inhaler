import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Library from "./pages/Library";

import Navbar from './components/NavBar';

function App() {
  return ( 
  <>
    
    <Box
      sx={{
        height: '100vh',
        width: 'flex',
        bgcolor: '#121212',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    
    ></Box>  
      
    <Box
      sx={{
        position: 'fixed',
        width: 'flex',
        display: 'flex',
        width: '100%',
        top: 0,

      }}>

      <Navbar />
      
    </Box> 

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Library" element={<Library />} />
     
    </Routes>

     
  </>
  


    
  );
}

export default App;


 {/* <Box> */}

        {/* <Card
          sx={{
            minWidth: 300,
            padding: 4,
            bgcolor: '#1e1e1e',
            color: 'white',
            boxShadow: 6,
            borderRadius: 2,
          }}
        >
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              File Inhaler
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: 3, opacity: 0.8 }}>
              Select and upload your file securely.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Upload File
            </Button>
          </CardContent>
        </Card>
      </Box> */}

  {/* </Box> */}
  