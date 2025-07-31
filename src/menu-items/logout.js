// assets
import { IconLogout } from '@tabler/icons-react';

// constant
const icons = { IconLogout };

// ==============================|| LOGOUT MENU ITEMS ||============================== //

const logout = {
  id: 'logout',
  title: 'Logout',
  type: 'item',
  url: '/logout',
  icon: icons.IconLogout,
  breadcrumbs: false,
  sx: {
    backgroundColor: '#ffebee',
    color: '#d32f2f',
    '&:hover': {
      backgroundColor: '#f44336',
      color: '#ffffff'
    }
  }
};

export default logout; 