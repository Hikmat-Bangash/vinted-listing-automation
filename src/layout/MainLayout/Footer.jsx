import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// ==============================|| FOOTER ||============================== //

const Footer = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
        <Typography variant="subtitle2" color="secondary">
          &copy; Dashboard
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="subtitle2" component={Link} to="#" underline="hover" color="secondary.main">
            Privacy Policy
          </Typography>
          <Typography variant="subtitle2" component={Link} to="#" underline="hover" color="secondary.main">
            Terms of Service
          </Typography>
          <Typography variant="subtitle2" component={Link} to="#" underline="hover" color="secondary.main">
            Contact
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  </Grid>
);

export default Footer;
