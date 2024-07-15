import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Container, Card, Typography } from '@mui/material';

const Booking = () => {
  const columns = [
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'position', headerName: 'Position', width: 200 },
    { field: 'office', headerName: 'Office', width: 150 },
    { field: 'salary', headerName: 'Salary', type: 'number', width: 150 },
  ];

  const rows = [
    { id: 1, firstName: 'Tiger', lastName: 'Nixon', position: 'System Architect', office: 'Edinburgh', salary: 320800 },
    { id: 2, firstName: 'Garrett', lastName: 'Winters', position: 'Accountant', office: 'Tokyo', salary: 170750 },
    { id: 3, firstName: 'Ashton', lastName: 'Cox', position: 'Junior Technical Author', office: 'San Francisco', salary: 86000 },
    { id: 4, firstName: 'Cedric', lastName: 'Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', salary: 433060 },
    { id: 5, firstName: 'Airi', lastName: 'Satou', position: 'Accountant', office: 'Tokyo', salary: 162700 },
    { id: 6, firstName: 'Brielle', lastName: 'Williamson', position: 'Integration Specialist', office: 'New York', salary: 372000 },
    { id: 7, firstName: 'Herrod', lastName: 'Chandler', position: 'Sales Assistant', office: 'San Francisco', salary: 137500 },
    { id: 8, firstName: 'Rhona', lastName: 'Davidson', position: 'Integration Specialist', office: 'Tokyo', salary: 327900 },
    { id: 9, firstName: 'Colleen', lastName: 'Hurst', position: 'Javascript Developer', office: 'San Francisco', salary: 205500 },
    { id: 10, firstName: 'Sonya', lastName: 'Frost', position: 'Software Engineer', office: 'Edinburgh', salary: 103600 },
    { id: 11, firstName: 'Jena', lastName: 'Gaines', position: 'Office Manager', office: 'London', salary: 90560 },
    { id: 12, firstName: 'Quinn', lastName: 'Flynn', position: 'Support Lead', office: 'Edinburgh', salary: 342000 },
    { id: 13, firstName: 'Charde', lastName: 'Marshall', position: 'Regional Director', office: 'San Francisco', salary: 470600 },
    { id: 14, firstName: 'Haley', lastName: 'Kennedy', position: 'Senior Marketing Designer', office: 'London', salary: 313500 },
    { id: 15, firstName: 'Tatyana', lastName: 'Fitzpatrick', position: 'Regional Director', office: 'London', salary: 385750 },
    { id: 16, firstName: 'Michael', lastName: 'Silva', position: 'Marketing Designer', office: 'London', salary: 198500 },
    { id: 17, firstName: 'Paul', lastName: 'Byrd', position: 'Chief Financial Officer (CFO)', office: 'New York', salary: 725000 },
    { id: 18, firstName: 'Gloria', lastName: 'Little', position: 'Systems Administrator', office: 'New York', salary: 237500 },
    { id: 19, firstName: 'Bradley', lastName: 'Greer', position: 'Software Engineer', office: 'London', salary: 132000 },
    { id: 20, firstName: 'Dai', lastName: 'Rios', position: 'Personnel Lead', office: 'Edinburgh', salary: 217500 },
  ];

  return (
    <div  className="container-fluid m-0 p-0 mt-0 position-relative" style={{top:'120px',}}>
      <div className="bookingTable card m-5 p-3 border-0 position-relative" style={{maxWidth:'100%'}}>
        <h1 className="fw-regular mb-3">Booking Results</h1>
        <div style={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
