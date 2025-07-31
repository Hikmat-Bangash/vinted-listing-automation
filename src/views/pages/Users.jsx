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
import { IconEdit, IconTrash, IconEye } from '@tabler/icons-react';

// ==============================|| USERS PAGE ||============================== //

const Users = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'Active',
      avatar: 'JD',
      lastLogin: '2024-01-15',
      department: 'Engineering'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      role: 'Manager',
      status: 'Active',
      avatar: 'SW',
      lastLogin: '2024-01-14',
      department: 'Marketing'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      role: 'User',
      status: 'Inactive',
      avatar: 'MJ',
      lastLogin: '2024-01-10',
      department: 'Sales'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'Admin',
      status: 'Active',
      avatar: 'ED',
      lastLogin: '2024-01-15',
      department: 'HR'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david.brown@example.com',
      role: 'User',
      status: 'Active',
      avatar: 'DB',
      lastLogin: '2024-01-13',
      department: 'Finance'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      email: 'lisa.anderson@example.com',
      role: 'Manager',
      status: 'Active',
      avatar: 'LA',
      lastLogin: '2024-01-12',
      department: 'Operations'
    },
    {
      id: 7,
      name: 'Robert Taylor',
      email: 'robert.taylor@example.com',
      role: 'User',
      status: 'Inactive',
      avatar: 'RT',
      lastLogin: '2024-01-08',
      department: 'IT'
    },
    {
      id: 8,
      name: 'Jennifer White',
      email: 'jennifer.white@example.com',
      role: 'Admin',
      status: 'Active',
      avatar: 'JW',
      lastLogin: '2024-01-15',
      department: 'Legal'
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
      default:
        return 'default';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin':
        return 'primary';
      case 'Manager':
        return 'secondary';
      case 'User':
        return 'default';
      default:
        return 'default';
    }
  };

  const UserCard = ({ user }) => (
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
            {user.avatar}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {user.email}
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip
            label={user.role}
            color={getRoleColor(user.role)}
            size="small"
            sx={{ mr: 1 }}
          />
          <Chip
            label={user.status}
            color={getStatusColor(user.status)}
            size="small"
          />
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          {user.department} • Last login: {user.lastLogin}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <MainCard title="Users Management" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="textSecondary">
            Manage your team members and their permissions
          </Typography>
        </Box>
        
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {isMobile ? (
            // Mobile view - Cards
            <Box sx={{ flex: 1, overflow: 'auto' }}>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <UserCard key={user.id} user={user} />
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
                      User
                    </TableCell>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Role
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
                      Department
                    </TableCell>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Last Login
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
                  {users
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((user) => (
                      <TableRow key={user.id} hover sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}>
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
                              {user.avatar}
                            </Avatar>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                {user.name}
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                {user.email}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={user.role}
                            color={getRoleColor(user.role)}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={user.status}
                            color={getStatusColor(user.status)}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">{user.department}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">{user.lastLogin}</Typography>
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
            count={users.length}
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

export default Users; 