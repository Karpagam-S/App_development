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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MoneyIcon from '@mui/icons-material/Money';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const FinancialManagement = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Financial Management
        </Typography>

        <Grid container spacing={4}>
          {/* Account Overview */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Account Overview
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <AccountBalanceIcon color="primary" />
                  <Typography variant="body1" ml={2}>
                    Current Balance: $50,000
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <MoneyIcon color="secondary" />
                  <Typography variant="body1" ml={2}>
                    Monthly Rental Income: $8,000
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <MoneyIcon color="error" />
                  <Typography variant="body1" ml={2}>
                    Monthly Expenses: $4,000
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Property Expenses */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Property Expenses
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Maintenance Costs"
                  variant="outlined"
                  fullWidth
                  mb={2}
                />
                <TextField
                  id="outlined-basic"
                  label="Utilities"
                  variant="outlined"
                  fullWidth
                  mb={2}
                />
                <TextField
                  id="outlined-basic"
                  label="Property Taxes"
                  variant="outlined"
                  fullWidth
                  mb={2}
                />
                <Box mt={2} textAlign="right">
                  <Button variant="contained" color="primary" startIcon={<AddCircleIcon />}>
                    Add Expense
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Transaction History */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Transaction History
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="right">Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        { date: '2024-01-01', desc: 'Rent Collection - Apt 101', amount: 1500 },
                        { date: '2024-01-05', desc: 'Property Tax Payment', amount: -2000 },
                        { date: '2024-01-10', desc: 'Maintenance - Apt 203', amount: -500 },
                      ].map((row) => (
                        <TableRow key={row.date}>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>{row.desc}</TableCell>
                          <TableCell align="right">{row.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Financial Tips */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Financial Tips for Property Management
                </Typography>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <HomeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Regular Maintenance"
                      secondary="Conduct regular maintenance checks to avoid costly repairs."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <MoneyIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Efficient Utility Management"
                      secondary="Monitor and manage utility usage to reduce costs."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <AccountBalanceIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Keep Accurate Records"
                      secondary="Maintain accurate financial records for all properties."
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

export default FinancialManagement;
