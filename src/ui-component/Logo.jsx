// material-ui
import { useTheme } from '@mui/material/styles';

// project imports

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

export default function Logo() {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Vinted" width="120" />
     *
     */
    <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shopping Bag Icon - More Prominent */}
      <rect x="2" y="8" width="24" height="24" rx="2" fill={theme.palette.mode === 'dark' ? '#90CAF9' : '#2196F3'} opacity="0.1"/>
      <path
        d="M6 12C6 10.8954 6.89543 10 8 10H20C21.1046 10 22 10.8954 22 12V28C22 29.1046 21.1046 30 20 30H8C6.89543 30 6 29.1046 6 28V12Z"
        fill={theme.palette.mode === 'dark' ? '#90CAF9' : '#2196F3'}
      />
      <path
        d="M10 8C10 6.89543 10.8954 6 12 6H16C17.1046 6 18 6.89543 18 8V10H10V8Z"
        fill={theme.palette.mode === 'dark' ? '#90CAF9' : '#2196F3'}
      />
      <path
        d="M12 16C12 15.4477 12.4477 15 13 15H15C15.5523 15 16 15.4477 16 16V24C16 24.5523 15.5523 25 15 25H13C12.4477 25 12 24.5523 12 24V16Z"
        fill="white"
      />
      
      {/* Vinted Text - Bold and Clear */}
      <text x="35" y="25" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill={theme.palette.mode === 'dark' ? '#FFFFFF' : '#212121'}>
        VINTED
      </text>
      
      {/* Subtitle */}
      <text x="35" y="35" fontFamily="Arial, sans-serif" fontSize="8" fill={theme.palette.mode === 'dark' ? '#90CAF9' : '#2196F3'}>
        LISTING AUTOMATION
      </text>
    </svg>
  );
}
