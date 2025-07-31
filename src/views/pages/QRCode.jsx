import { useState } from 'react';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  IconButton,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  TablePagination
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import { IconEdit, IconTrash, IconEye, IconDownload, IconQrcode } from '@tabler/icons-react';

// ==============================|| QR CODE PAGE ||============================== //

const QRCode = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [qrcodes] = useState([
    {
      id: '#QR-001',
      name: 'Product QR Code 1',
      description: 'QR code for iPhone 15 Pro listing',
      type: 'Product',
      status: 'Active',
      scans: 45,
      created: '2024-01-15',
      lastScanned: '2024-01-20',
      avatar: '📱'
    },
    {
      id: '#QR-002',
      name: 'Store QR Code',
      description: 'Main store QR code for customers',
      type: 'Store',
      status: 'Active',
      scans: 128,
      created: '2024-01-10',
      lastScanned: '2024-01-21',
      avatar: '🏪'
    },
    {
      id: '#QR-003',
      name: 'Promotion QR',
      description: 'Special discount QR code',
      type: 'Promotion',
      status: 'Inactive',
      scans: 23,
      created: '2024-01-05',
      lastScanned: '2024-01-15',
      avatar: '🎯'
    },
    {
      id: '#QR-004',
      name: 'Product QR Code 2',
      description: 'QR code for MacBook Air listing',
      type: 'Product',
      status: 'Active',
      scans: 67,
      created: '2024-01-12',
      lastScanned: '2024-01-22',
      avatar: '💻'
    },
    {
      id: '#QR-005',
      name: 'Event QR Code',
      description: 'QR code for upcoming sale event',
      type: 'Event',
      status: 'Pending',
      scans: 0,
      created: '2024-01-18',
      lastScanned: 'Never',
      avatar: '🎉'
    },
    {
      id: '#QR-006',
      name: 'Product QR Code 3',
      description: 'QR code for Nike Air Max listing',
      type: 'Product',
      status: 'Active',
      scans: 89,
      created: '2024-01-08',
      lastScanned: '2024-01-19',
      avatar: '👟'
    },
    {
      id: '#QR-007',
      name: 'Support QR Code',
      description: 'Customer support QR code',
      type: 'Support',
      status: 'Active',
      scans: 34,
      created: '2024-01-14',
      lastScanned: '2024-01-20',
      avatar: '🆘'
    },
    {
      id: '#QR-008',
      name: 'Product QR Code 4',
      description: 'QR code for Samsung Galaxy listing',
      type: 'Product',
      status: 'Active',
      scans: 156,
      created: '2024-01-06',
      lastScanned: '2024-01-21',
      avatar: '📱'
    }
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'error';
      case 'Pending':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Product':
        return 'primary';
      case 'Store':
        return 'secondary';
      case 'Promotion':
        return 'info';
      case 'Event':
        return 'warning';
      case 'Support':
        return 'error';
      default:
        return 'default';
    }
  };

  const QRCodeCard = ({ qrcode }) => (
    <Card sx={{ mb: 2, boxShadow: 2, borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
              width: 48,
              height: 48,
              mr: 2,
              fontSize: '1.5rem'
            }}
          >
            {qrcode.avatar}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {qrcode.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {qrcode.description}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton size="small" color="primary">
              <IconEye size={18} />
            </IconButton>
            <IconButton size="small" color="secondary">
              <IconEdit size={18} />
            </IconButton>
            <IconButton size="small" color="error">
              <IconTrash size={18} />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {qrcode.id}
          </Typography>
          <Chip label={qrcode.status} color={getStatusColor(qrcode.status)} size="small" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip label={qrcode.type} color={getTypeColor(qrcode.type)} size="small" sx={{ mr: 1 }} />
          <Typography variant="body2" color="textSecondary">
            {qrcode.scans} scans • Created: {qrcode.created}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Last scanned: {qrcode.lastScanned}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <MainCard title="QR Code Management" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="textSecondary">
            Manage your QR codes for products, promotions, and events
          </Typography>
        </Box>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {isMobile ? (
            // Mobile view - Cards
            <Box sx={{ flex: 1, overflow: 'auto' }}>
              {qrcodes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((qrcode) => (
                <QRCodeCard key={qrcode.id} qrcode={qrcode} />
              ))}
            </Box>
          ) : (
            // Desktop view - Table
            <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 2, flex: 1, minHeight: 0 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        backgroundColor: '#f8f9fa',
                        color: '#495057',
                        fontWeight: 600,
                        borderBottom: '2px solid #dee2e6'
                      }}
                    >
                      QR Code
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: '#f8f9fa',
                        color: '#495057',
                        fontWeight: 600,
                        borderBottom: '2px solid #dee2e6'
                      }}
                    >
                      Type
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: '#f8f9fa',
                        color: '#495057',
                        fontWeight: 600,
                        borderBottom: '2px solid #dee2e6'
                      }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: '#f8f9fa',
                        color: '#495057',
                        fontWeight: 600,
                        borderBottom: '2px solid #dee2e6'
                      }}
                    >
                      Scans
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: '#f8f9fa',
                        color: '#495057',
                        fontWeight: 600,
                        borderBottom: '2px solid #dee2e6'
                      }}
                    >
                      Created
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: '#f8f9fa',
                        color: '#495057',
                        fontWeight: 600,
                        borderBottom: '2px solid #dee2e6'
                      }}
                    >
                      Last Scanned
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: '#f8f9fa',
                        color: '#495057',
                        fontWeight: 600,
                        borderBottom: '2px solid #dee2e6'
                      }}
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {qrcodes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((qrcode) => (
                    <TableRow key={qrcode.id} hover sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar
                            sx={{
                              bgcolor: theme.palette.primary.main,
                              width: 40,
                              height: 40,
                              mr: 2,
                              fontSize: '1.2rem'
                            }}
                          >
                            {qrcode.avatar}
                          </Avatar>
                          <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                              {qrcode.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {qrcode.description}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip label={qrcode.type} color={getTypeColor(qrcode.type)} size="small" />
                      </TableCell>
                      <TableCell>
                        <Chip label={qrcode.status} color={getStatusColor(qrcode.status)} size="small" />
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {qrcode.scans}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{qrcode.created}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{qrcode.lastScanned}</Typography>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <IconButton size="small" color="primary">
                            <IconEye size={18} />
                          </IconButton>
                          <IconButton size="small" color="secondary">
                            <IconEdit size={18} />
                          </IconButton>
                          <IconButton size="small" color="info">
                            <IconDownload size={18} />
                          </IconButton>
                          <IconButton size="small" color="error">
                            <IconTrash size={18} />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          <TablePagination
            component="div"
            count={qrcodes.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
            sx={{
              borderTop: '1px solid #dee2e6',
              backgroundColor: '#f8f9fa'
            }}
          />
        </Box>
      </MainCard>
    </Box>
  );
};

export default QRCode;
