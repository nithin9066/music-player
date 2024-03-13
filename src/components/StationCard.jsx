import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { setCurrentStation } from '../redux/PlayerSlice';

export default function StationCard({ station }) {
  const dispatch = useDispatch();
  const PlayStation = () => {
    dispatch(setCurrentStation(station))
  }
  return (
    <List onClick={PlayStation} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={station.name} src={station.favicon} />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {station.name}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
