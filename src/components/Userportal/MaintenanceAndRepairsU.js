import React, { useState } from 'react';
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const MaintenanceAndRepairs = () => {
  const [open, setOpen] = useState(false);
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Handle the submission of the maintenance request
    console.log('Issue:', issue);
    console.log('Description:', description);
    console.log('Priority:', priority);
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Maintenance and Repairs
        </Typography>

        <Grid container spacing={4}>
          {/* Report Maintenance Issue */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Report Maintenance Issue
                </Typography>
                <Button variant="contained" color="primary" startIcon={<AddCircleIcon />} onClick={handleClickOpen}>
                  Report Issue
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Report Maintenance Issue</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Please fill out the form below to report a maintenance issue.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="issue"
                      label="Issue"
                      type="text"
                      fullWidth
                      variant="standard"
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                    />
                    <TextField
                      margin="dense"
                      id="description"
                      label="Description"
                      type="text"
                      fullWidth
                      variant="standard"
                      multiline
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <FormControl fullWidth margin="dense">
                      <InputLabel id="priority-label">Priority</InputLabel>
                      <Select
                        labelId="priority-label"
                        id="priority"
                        value={priority}
                        label="Priority"
                        onChange={(e) => setPriority(e.target.value)}
                      >
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                      </Select>
                    </FormControl>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} color="primary">
                      Submit
                    </Button>
                  </DialogActions>
                </Dialog>
              </CardContent>
            </Card>
          </Grid>

          {/* Maintenance Request Status */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Maintenance Request Status
                </Typography>
                <List>
                  {[
                    { issue: 'Leaky Faucet', status: 'In Progress' },
                    { issue: 'Broken Window', status: 'Completed' },
                    { issue: 'AC Not Working', status: 'Pending' },
                  ].map((request, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar>
                          {request.status === 'Completed' ? (
                            <CheckCircleIcon color="success" />
                          ) : (
                            <ReportProblemIcon color="warning" />
                          )}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={request.issue}
                        secondary={`Status: ${request.status}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Maintenance Tips */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Maintenance Tips
                </Typography>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <HomeRepairServiceIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Regular Inspections"
                      secondary="Conduct regular inspections to identify issues early."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <HomeRepairServiceIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Preventive Maintenance"
                      secondary="Implement preventive maintenance to reduce repair costs."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <HomeRepairServiceIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Hire Professionals"
                      secondary="Ensure to hire licensed professionals for repairs."
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MaintenanceAndRepairs;
