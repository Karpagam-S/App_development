// src/components/DocumentManagement.js
import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import InfoIcon from '@mui/icons-material/Info';
import './DocumentManagement.css'; // Ensure you have the CSS file for styling

const DocumentManagement = () => {
  const documents = [
    { title: 'Lease Agreement', description: 'The lease agreement for the property.', date: '2023-01-15' },
    { title: 'Maintenance Records', description: 'Records of all maintenance activities.', date: '2023-02-20' },
    { title: 'Financial Statements', description: 'Monthly financial statements.', date: '2023-03-10' },
  ];

  const procedures = [
    { title: 'Move-in Procedure', description: 'Step-by-step guide to moving into your new home.', link: '#' },
    { title: 'Maintenance Request', description: 'How to submit a maintenance request.', link: '#' },
    { title: 'Rent Payment', description: 'Options and methods for paying your rent.', link: '#' },
    { title: 'Move-out Procedure', description: 'Guidelines for moving out and returning keys.', link: '#' },
  ];

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Document Management
        </Typography>
        <Typography variant="body1" paragraph>
          Manage your documents here. You can view, download, or upload new documents.
        </Typography>
        <Divider />
        <Box my={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search documents..."
                InputProps={{
                  startAdornment: <SearchIcon position="start" />,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<CloudUploadIcon />}
                fullWidth
              >
                Upload Document
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={3}>
          {documents.map((doc, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardHeader
                  avatar={<DescriptionIcon />}
                  title={doc.title}
                  subheader={`Uploaded on: ${doc.date}`}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {doc.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Download</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box my={4}>
          <Typography variant="h5" gutterBottom>
            Tenant Procedures
          </Typography>
          <Typography variant="body1" paragraph>
            Learn about the procedures and guidelines for tenants. Click on a procedure to learn more.
          </Typography>
          <Grid container spacing={3}>
            {procedures.map((proc, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardHeader
                    avatar={<InfoIcon />}
                    title={proc.title}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {proc.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={proc.link}>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default DocumentManagement;
