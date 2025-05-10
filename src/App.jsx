import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: 'flex',
        bgcolor: '#121212',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
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
    </Box>
  );
}

export default App;