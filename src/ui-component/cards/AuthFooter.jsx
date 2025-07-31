import { Link } from 'react-router-dom';

// material-ui
import { Stack, Typography } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
    <Typography variant="subtitle2" component={Link} href="#" target="_blank" underline="hover">
      &copy; Dashboard
    </Typography>
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="subtitle2" component={Link} to="#" underline="hover">
        Privacy Policy
      </Typography>
      <Typography variant="subtitle2" component={Link} to="#" underline="hover">
        Terms of Service
      </Typography>
    </Stack>
  </Stack>
);

export default AuthFooter;
