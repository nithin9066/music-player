import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar({heading}) {
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%', zIndex: 99, top: 0, left: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            {heading ? heading : 'Radio'}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
