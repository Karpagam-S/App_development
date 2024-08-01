import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Badge,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const CommunicationAndNotifications = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Communication and Notifications
        </Typography>
        <Grid container spacing={4}>
          {/* Messaging Section */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Messages
                </Typography>
                <Box component="form" noValidate autoComplete="off" mb={2}>
                  <TextField
                    id="outlined-basic"
                    label="Send a message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                  />
                  <Box mt={2} textAlign="right">
                    <Button variant="contained" color="primary">
                      Send
                    </Button>
                  </Box>
                </Box>
                <Typography variant="subtitle1" gutterBottom>
                  Recent Messages
                </Typography>
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Owner" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Owner Name"
                      secondary="Hey, I'm interested in the property..."
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Owner" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Owner Name"
                      secondary="Can we schedule a viewing for tomorrow?"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          {/* Notifications Section */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Notifications
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                  <Typography variant="body1" ml={2}>
                    You have 4 new messages
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Badge badgeContent={2} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                  <Typography variant="body1" ml={2}>
                    You have 2 new notifications
                  </Typography>
                </Box>
                <Box mt={2} textAlign="right">
                  <Button variant="contained" color="secondary">
                    View All
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CommunicationAndNotifications;
