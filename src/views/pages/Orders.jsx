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
import { IconEdit, IconTrash, IconEye, IconCreditCard } from '@tabler/icons-react';

// ==============================|| ORDERS PAGE ||============================== //

const Orders = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [orders] = useState([
    {
      id: '#ORD-001',
      customer: 'John Smith',
      email: 'john.smith@example.com',
      products: 3,
      total: 1299.99,
      status: 'Delivered',
      date: '2024-01-15',
      payment: 'Credit Card',
      avatar: 'JS'
    },
    {
      id: '#ORD-002',
      customer: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      products: 1,
      total: 899.99,
      status: 'Processing',
      date: '2024-01-14',
      payment: 'PayPal',
      avatar: 'SJ'
    },
    {
      id: '#ORD-003',
      customer: 'Mike Davis',
      email: 'mike.davis@example.com',
      products: 2,
      total: 179.99,
      status: 'Shipped',
      date: '2024-01-13',
      payment: 'Credit Card',
      avatar: 'MD'
    },
    {
      id: '#ORD-004',
      customer: 'Emily Wilson',
      email: 'emily.wilson@example.com',
      products: 4,
      total: 2349.99,
      status: 'Pending',
      date: '2024-01-12',
      payment: 'Bank Transfer',
      avatar: 'EW'
    },
    {
      id: '#ORD-005',
      customer: 'David Brown',
      email: 'david.brown@example.com',
      products: 1,
      total: 1199.99,
      status: 'Cancelled',
      date: '2024-01-11',
      payment: 'Credit Card',
      avatar: 'DB'
    },
    {
      id: '#ORD-006',
      customer: 'Lisa Anderson',
      email: 'lisa.anderson@example.com',
      products: 2,
      total: 459.99,
      status: 'Delivered',
      date: '2024-01-10',
      payment: 'PayPal',
      avatar: 'LA'
    },
    {
      id: '#ORD-007',
      customer: 'Robert Taylor',
      email: 'robert.taylor@example.com',
      products: 3,
      total: 789.99,
      status: 'Shipped',
      date: '2024-01-09',
      payment: 'Credit Card',
      avatar: 'RT'
    },
    {
      id: '#ORD-008',
      customer: 'Jennifer White',
      email: 'jennifer.white@example.com',
      products: 1,
      total: 299.99,
      status: 'Processing',
      date: '2024-01-08',
      payment: 'Bank Transfer',
      avatar: 'JW'
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
      case 'Delivered':
        return 'success';
      case 'Shipped':
        return 'info';
      case 'Processing':
        return 'warning';
      case 'Pending':
        return 'default';
      case 'Cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const getPaymentIcon = (payment) => {
    switch (payment) {
      case 'Credit Card':
        return <IconCreditCard size={16} />;
      case 'PayPal':
        return <IconCreditCard size={16} />;
      case 'Bank Transfer':
        return <IconCreditCard size={16} />;
      default:
        return <IconCreditCard size={16} />;
    }
  };

  const OrderCard = ({ order }) => (
    <Card sx={{ mb: 2, boxShadow: 2, borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
              width: 48,
              height: 48,
              mr: 2
            }}
          >
            {order.avatar}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {order.customer}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {order.email}
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
            {order.id}
          </Typography>
          <Chip
            label={order.status}
            color={getStatusColor(order.status)}
            size="small"
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="body2" color="textSecondary">
            {order.products} items • ${order.total}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {getPaymentIcon(order.payment)}
            <Typography variant="body2" color="textSecondary">
              {order.payment}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="textSecondary">
          Ordered: {order.date}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <MainCard title="Orders Management" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="textSecondary">
            Track and manage customer orders and deliveries
          </Typography>
        </Box>
        
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {isMobile ? (
            // Mobile view - Cards
            <Box sx={{ flex: 1, overflow: 'auto' }}>
              {orders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
            </Box>
          ) : (
            // Desktop view - Table
            <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 2, flex: 1, minHeight: 0 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Customer
                    </TableCell>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Order ID
                    </TableCell>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Products
                    </TableCell>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Total
                    </TableCell>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Status
                    </TableCell>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Payment
                    </TableCell>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Date
                    </TableCell>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((order) => (
                      <TableRow key={order.id} hover sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar
                              sx={{
                                bgcolor: theme.palette.primary.main,
                                width: 40,
                                height: 40,
                                mr: 2
                              }}
                            >
                              {order.avatar}
                            </Avatar>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                {order.customer}
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                {order.email}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {order.id}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">{order.products} items</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            ${order.total}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={order.status}
                            color={getStatusColor(order.status)}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            {getPaymentIcon(order.payment)}
                            <Typography variant="body2">
                              {order.payment}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">{order.date}</Typography>
                        </TableCell>
                        <TableCell>
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
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          
          <TablePagination
            component="div"
            count={orders.length}
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

export default Orders; 