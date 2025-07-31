import dashboard from './dashboard';
import orders from './orders';
import users from './users';
import products from './products';
import qrcode from './qrcode';
import logout from './logout';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      children: [
        dashboard,
        orders,
        users,
        products,
        qrcode
      ]
    },
    {
      id: 'logout-group',
      title: '',
      type: 'group',
      children: [
        logout
      ]
    }
  ]
};

export default menuItems;
