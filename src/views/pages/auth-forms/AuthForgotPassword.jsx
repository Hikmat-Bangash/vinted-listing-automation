import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// ===============================|| FORGOT PASSWORD ||=============================== //

export default function AuthForgotPassword() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple password reset - in a real app, you'd send a reset email
    if (email) {
      alert('Password reset link sent to your email!');
      navigate('/login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
        <InputLabel htmlFor="outlined-adornment-email-forgot">Email Address</InputLabel>
        <OutlinedInput 
          id="outlined-adornment-email-forgot" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </FormControl>

      <Box sx={{ mt: 2 }}>
        <AnimateButton>
          <Button color="secondary" fullWidth size="large" type="submit" variant="contained">
            Reset Password
          </Button>
        </AnimateButton>
      </Box>
      
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="subtitle1" component={Link} to="/login" color="secondary" sx={{ textDecoration: 'none' }}>
          Back to Login
        </Typography>
      </Box>
    </form>
  );
} 