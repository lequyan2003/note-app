import NotificationsIcon from '@mui/icons-material/Notifications';
import { useEffect, useState } from 'react';
import { createClient } from 'graphql-ws';
import { GRAPHQL_SUBSCRIPTION_ENDPOINT } from '../utils/constants.js';
import { Badge, Menu, MenuItem } from '@mui/material';

const client = createClient({
    url: GRAPHQL_SUBSCRIPTION_ENDPOINT,
  });
  
const query = `subscription PushNotification {
    notification {
        message
    }
}`;

export default function PushNotification() {
    const [invisible, setInvisible] = useState(true);
    const [notification, setNotification] = useState('');

    const [anchorEl, setAnchorEl] = useState(null);
    
    const open = Boolean(anchorEl);
    
    const handleClose = () => {
        setAnchorEl(null);
        setNotification('');
        setInvisible(true);
    };
    
    const handleClick = (e) => {
        if (notification) {
            setAnchorEl(e.currentTarget);
        }
    };

    useEffect(() => {
        (async () => {
          const onNext = (data) => {
            setInvisible(false);
    
            const message = data?.data?.notification?.message;
            setNotification(message);
            console.log('[PUSH NOTIFICATION]', { data });
          };
    
          await new Promise((resolve, reject) => {
            client.subscribe(
              {
                query,
              },
              {
                next: onNext,
                error: reject,
                complete: resolve,
              }
            );
          });
        })();
      }, []);

  return (
    <>
    <Badge color='secondary' variant='dot' invisible={invisible}>
        <NotificationsIcon onClick={handleClick} />
    </Badge>
    <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
    >
        <MenuItem onClick={handleClose}>{notification}</MenuItem>
    </Menu>
    </>
  );
}
