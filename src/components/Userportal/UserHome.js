// src/components/UserHome.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar, Typography, List, ListItem, ListItemText, ListItemIcon, Divider, Card, CardContent, CardMedia, Grid, Button, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BuildIcon from '@mui/icons-material/Build';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DescriptionIcon from '@mui/icons-material/Description';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;

const UserHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Cealum Premises
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem button component={Link} to="/user/property-listings">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Property Listings" />
        </ListItem>
        <ListItem button component={Link} to="/user/financial-management">
          <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
          <ListItemText primary="Financial Management" />
        </ListItem>
        <ListItem button component={Link} to="/user/maintenance-and-repairs">
          <ListItemIcon><BuildIcon /></ListItemIcon>
          <ListItemText primary="Maintenance and Repairs" />
        </ListItem>
        <ListItem button component={Link} to="/user/communication-and-notifications">
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Communication and Notifications" />
        </ListItem>
        <ListItem button component={Link} to="/user/document-management">
          <ListItemIcon><DescriptionIcon /></ListItemIcon>
          <ListItemText primary="Document Management" />
        </ListItem>
      </List>
    </div>
  );

  const cardData = [
    { title: 'Houses for Rent', description: 'Explore various houses available for rent.', image: 'https://2.bp.blogspot.com/-wDEXCFYGyV4/TxnlLZvrwnI/AAAAAAAAAJk/1Ab87vf3ZSk/s1600/beach+front+houses+and+beach+019.JPG' },
    { title: 'Villas for Rent', description: 'Luxury villas available for Sale.', image: 'https://tse3.mm.bing.net/th?id=OIP.B9ZqEM4lmehXjP-CRobIMwHaE8&pid=Api&P=0&h=180' },
    { title: 'Latest Lands', description: 'Discover the latest lands for sale.', image: 'https://tse2.mm.bing.net/th?id=OIP.A-Sk1KO_LjzifjWIZpu-4gHaFD&pid=Api&P=0&h=180' },
    { title: 'House plot', description: 'Find properties available near your location.', image: 'https://tse1.mm.bing.net/th?id=OIP.OcWvryz-1hXke_qEewreHQHaFj&pid=Api&P=0&h=180' },
    { title: 'Beach side house', description: 'Explore various houses available for rent.', image: 'https://tse1.mm.bing.net/th?id=OIP.0jal_U4YwUAurjHoJn9ZPQHaFV&pid=Api&P=0&h=180' },
    { title: 'Cottage house', description: 'Cottage House available for rent.', image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Apartments', description: 'Discover the latest Apartments for sale.', image: 'https://media.istockphoto.com/id/1177797403/photo/modern-apartment-buildings-on-a-sunny-day-with-a-blue-sky.jpg?s=2048x2048&w=is&k=20&c=FlJtLqUTUWtG9jD5aSVqA0hlf8NWzF1RdRVrFFJ6ho4=' },
    { title: 'Individual Villas', description: 'Find properties available near your location.', image: 'https://tse3.mm.bing.net/th?id=OIP.8in1p9Uw4eHjwA2cDhjJbwHaE8&pid=Api&P=0&h=180' },
    { title: '1BHK Houses', description: 'Explore various houses available for rent.', image: 'https://tse4.mm.bing.net/th?id=OIP.760ftPyaS9W1Q1kbpbgWAAHaEO&pid=Api&P=0&h=180' },
    { title: '2BHK Houses', description: '2BHK Houses available for rent.', image: 'https://1.bp.blogspot.com/-NznqmEmtcwk/W6NKF2swNQI/AAAAAAABOe4/4ID-ELhEiK4auViR8NlIvE4FydG0p4mLQCLcBGAs/s1920/modern-home-simple-style.jpg' },
    { title: '3BHK Houses', description: '3BHK Houses available for rent.', image: 'https://4.bp.blogspot.com/-YVNy7AAgkns/XaWGq6YWh9I/AAAAAAABU3w/yfwJ9soFAwcDTpupua-q3cAwxHwvB-YeACNcBGAsYHQ/s1600/bungalow-design-india.jpg' },
    { title: 'Properties Near You', description: 'Find properties available near your location.', image: 'https://tse2.mm.bing.net/th?id=OIP.mzCc1VQML0y9t2V1M2y1AQHaE7&pid=Api&P=0&h=180' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            Cealum Premises
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          Welcome Back !
        </Typography>
        
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/01093dcf-3500-4866-b84d-fb3c90fa9cfc/dgfdy3d-d246424f-3249-4f42-8a63-a453dc95d3f6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMDkzZGNmLTM1MDAtNDg2Ni1iODRkLWZiM2M5MGZhOWNmY1wvZGdmZHkzZC1kMjQ2NDI0Zi0zMjQ5LTRmNDItOGE2My1hNDUzZGM5NWQzZjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S1mDwEuL2XeHkwPdvNqQ5ezbP9Tx1n9kwxPCUE826LA)`,
            height: 400,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',
            }}
          />
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  The Oggy House
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  8 Bed · 5 Bath · 5000 Sq Ft . Swimming pool . Garden . Library . Fully Furnished  
                </Typography>
                <Typography variant="h4" color="inherit" paragraph>
                  $300000
                </Typography>
                <Button variant="contained" color="primary">
                  View Property
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        
        <Typography variant="h5" gutterBottom>
          Display Latest & Featured Properties
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Get started by choosing from one of our pre-built page templates to showcase your properties
        </Typography>
        
        <Grid container spacing={3}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <Button size="small">Learn More</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default UserHome;
