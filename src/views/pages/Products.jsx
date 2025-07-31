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
  Rating,
  TablePagination
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import { IconEdit, IconTrash, IconEye } from '@tabler/icons-react';

// ==============================|| PRODUCTS PAGE ||============================== //

const Products = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [products] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro',
      category: 'Electronics',
      price: 999.99,
      stock: 45,
      status: 'In Stock',
      rating: 4.8,
      sales: 120,
      image: '📱'
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      category: 'Computers',
      price: 1199.99,
      stock: 23,
      status: 'Low Stock',
      rating: 4.9,
      sales: 89,
      image: '💻'
    },
    {
      id: 3,
      name: 'Nike Air Max',
      category: 'Footwear',
      price: 129.99,
      stock: 0,
      status: 'Out of Stock',
      rating: 4.5,
      sales: 234,
      image: '👟'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24',
      category: 'Electronics',
      price: 899.99,
      stock: 67,
      status: 'In Stock',
      rating: 4.7,
      sales: 156,
      image: '📱'
    },
    {
      id: 5,
      name: 'Adidas Ultraboost',
      category: 'Footwear',
      price: 179.99,
      stock: 12,
      status: 'Low Stock',
      rating: 4.6,
      sales: 98,
      image: '👟'
    },
    {
      id: 6,
      name: 'Sony WH-1000XM4',
      category: 'Electronics',
      price: 349.99,
      stock: 34,
      status: 'In Stock',
      rating: 4.9,
      sales: 78,
      image: '🎧'
    },
    {
      id: 7,
      name: 'Dell XPS 13',
      category: 'Computers',
      price: 1299.99,
      stock: 8,
      status: 'Low Stock',
      rating: 4.7,
      sales: 45,
      image: '💻'
    },
    {
      id: 8,
      name: 'Apple Watch Series 9',
      category: 'Electronics',
      price: 399.99,
      stock: 56,
      status: 'In Stock',
      rating: 4.8,
      sales: 92,
      image: '⌚'
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
      case 'In Stock':
        return 'success';
      case 'Low Stock':
        return 'warning';
      case 'Out of Stock':
        return 'error';
      default:
        return 'default';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Electronics':
        return 'primary';
      case 'Computers':
        return 'secondary';
      case 'Footwear':
        return 'info';
      default:
        return 'default';
    }
  };

  const ProductCard = ({ product }) => (
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
            {product.image}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ${product.price}
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
          <Chip
            label={product.category}
            color={getCategoryColor(product.category)}
            size="small"
            sx={{ mr: 1 }}
          />
          <Chip
            label={product.status}
            color={getStatusColor(product.status)}
            size="small"
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Rating value={product.rating} precision={0.1} size="small" readOnly />
          <Typography variant="body2" color="textSecondary">
            Stock: {product.stock} • Sales: {product.sales}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <MainCard title="Products Management" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="textSecondary">
            Manage your product catalog and inventory
          </Typography>
        </Box>
        
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {isMobile ? (
            // Mobile view - Cards
            <Box sx={{ flex: 1, overflow: 'auto' }}>
              {products
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
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
                      Product
                    </TableCell>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Category
                    </TableCell>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Price
                    </TableCell>
                    <TableCell sx={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#495057', 
                      fontWeight: 600,
                      borderBottom: '2px solid #dee2e6'
                    }}>
                      Stock
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
                      Rating
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
                  {products
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((product) => (
                      <TableRow key={product.id} hover sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}>
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
                              {product.image}
                            </Avatar>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                {product.name}
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                {product.sales} sales
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={product.category}
                            color={getCategoryColor(product.category)}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            ${product.price}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">{product.stock}</Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={product.status}
                            color={getStatusColor(product.status)}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <Rating value={product.rating} precision={0.1} size="small" readOnly />
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
            count={products.length}
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

export default Products; 