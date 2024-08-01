import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const properties = {
  rentalHouses: [
    { id: 1, title: 'Cozy Apartment', image: 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1661498522/Website/CMS-Uploads/rziqs1snl06iaspys39j.jpg', price: '$1200/month', description: '2 bed, 1 bath apartment in the city center' },
    { id: 2, title: 'Spacious House', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-f6AE_L58JtdO4hLqVuJw3KP9nK_30yoCew&s', price: '$2200/month', description: '3 bed, 2 bath house with a garden' },
    { id: 1, title: 'Apartment', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYkx4vCo8pSJk3POFq28Il8pD9ANqYjiIsA&s', price: '$1200/month', description: '2 bed, 1 bath apartment in the city center' },
    { id: 2, title: 'Family House', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/AIMCO_apartment_interior.jpg/640px-AIMCO_apartment_interior.jpg', price: '$2200/month', description: '3 bed, 2 bath house with a garden' },
    { id: 2, title: 'Bachelor House', image: 'https://www.treehugger.com/thmb/YIKviDD6t3A7evy3uRuzB5cb2ss=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bachelor-pad-micro-apartment-renovation-littlemore-design-2-8ab9416796dc4e19a8f430d83360bc2f.jpeg', price: '$2200/month', description: '3 bed, 2 bath house with a garden' },
  ],
  housesForSale: [
    { id: 1, title: 'Modern Villa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sYWHad9z229k8BOKefdbvUwOl3czxfSVeA&s', price: '$500,000', description: '4 bed, 3 bath villa with pool' },
    { id: 2, title: 'Family Home', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVkIjPvTBJljB9a2ZbqjByaamnrtVdW6ZaQ&s', price: '$350,000', description: '3 bed, 2 bath family home with garage' },
    { id: 1, title: 'Modern Villa', image: 'https://img.freepik.com/premium-photo/spacious-elegant-white-house-with-abundance-windows_822108-14888.jpg', price: '$500,000', description: '4 bed, 3 bath villa with pool' },
    { id: 2, title: 'New Home', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60m1ZkT-LSVNVx9b9kE_Dox4Y1wS6aXXwpw&s', price: '$350,000', description: '3 bed, 2 bath family home with garage' },
    { id: 1, title: 'Latest Villa', image: 'https://i.pinimg.com/originals/4e/83/13/4e8313e677cddfdbda3bb1d521be6e22.jpg', price: '$500,000', description: '4 bed, 3 bath villa with pool' },
    { id: 2, title: 'Cozy Home', image: 'https://s2.dmcdn.net/v/N1nZV1QSXHxdneqAW/x1080', price: '$350,000', description: '3 bed, 2 bath family home with garage' },
  ],
  landForSale: [
    { id: 1, title: 'Farm Land', image: 'https://img.freepik.com/free-photo/beautiful-landscape-with-clear-sky_23-2149721820.jpg', price: '$150,000', description: '10 acres of fertile farm land' },
    { id: 1, title: 'Farm Land', image: 'https://assets.thehansindia.com/h-upload/2021/06/10/1081489-lands-for-sale.webp', price: '$150,000', description: '10 acres of fertile farm land' },
    { id: 2, title: 'Building Plot', image: 'https://media.istockphoto.com/id/1399166223/photo/czech-realty-business-land-plot-in-aerial-view-gps-registration-survey-of-property-real.jpg?s=612x612&w=0&k=20&c=bA4FmyKdgJE6uPwWe1t27l2p9Nw-ZfJZNMlr9DYjQag=', price: '$200,000', description: '2 acres of prime building land' },
  ],
};

const PropertyListings = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Properties
        </Typography>

        {/* Rental Houses Section */}
        <Typography variant="h5" component="h2" gutterBottom>
          <h4>
          Rental Houses
          </h4>
        </Typography>
        <Grid container spacing={4}>
          {properties.rentalHouses.map((property) => (
            <Grid item key={property.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={property.image}
                  alt={property.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {property.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {property.description}
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    {property.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                  <Button size="small" color="secondary">
                    Contact Owner
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Houses for Sale Section */}
        <Typography variant="h5" component="h2" gutterBottom mt={4}>
          <h4>
          Houses for Sale
          </h4>
        </Typography>
        <Grid container spacing={4}>
          {properties.housesForSale.map((property) => (
            <Grid item key={property.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={property.image}
                  alt={property.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {property.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {property.description}
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    {property.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                  <Button size="small" color="secondary">
                    Contact Owner
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Land for Sale Section */}
        <Typography variant="h5" component="h2" gutterBottom mt={4}>
          <h4>
          Land for Sale
          </h4>
        </Typography>
        <Grid container spacing={4}>
          {properties.landForSale.map((property) => (
            <Grid item key={property.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={property.image}
                  alt={property.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {property.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {property.description}
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    {property.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                  <Button size="small" color="secondary">
                    Contact Owner
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PropertyListings;
