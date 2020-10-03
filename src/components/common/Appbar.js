import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, Button, LinearProgress } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useViewport from '../../hooks/viewport';
import LocationMenu from './LocationMenu';
import { useSelector } from 'react-redux';

const TopBar = () => {
  const { width } = useViewport();
  const [menuPosition, setMenuPosition] = useState(null);
  const selectedLocation = useSelector(state => state.location.selectedLocation)
  const showLoader = useSelector(state => state.ui.showLoader)

  const handleSelectLocation = (event) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX
    });
  };

  return (
    <AppBar position="fixed">
      <Toolbar variant={width > 1025 ? 'dense' : "regular"}>
        <Box flexGrow="1" alignContent="space-between">
          <Typography variant="h6">
            RENTAL MANAGEMNET SYSTEM
          </Typography>
        </Box>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSelectLocation}
          startIcon={selectedLocation && <LocationOnIcon />}
        >
          {selectedLocation ? `${selectedLocation.branch}, ${selectedLocation.location}` : 'Select Location'}
        </Button>
        <LocationMenu menuPosition={menuPosition} setMenuPosition={setMenuPosition} />
      </Toolbar>
      {showLoader && <LinearProgress color="secondary" />}
    </AppBar>
  )
}
export default React.memo(TopBar);