import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', flex: 1},
  { field: 'firstName', headerName: 'Name', flex: 1},
  { field: 'email', headerName: 'Email ID', flex: 1},
];

const rows = [
  { id: 1, email: 'Snow', firstName: 'Jon'},
  { id: 2, email: 'Lannister', firstName: 'Cersei'},
  { id: 3, email: 'Lannister', firstName: 'Jaime'},
  { id: 4, email: 'Stark', firstName: 'Arya'},
  { id: 5, email: 'Targaryen', firstName: 'Daenerys'},
  { id: 6, email: 'Melisandre', firstName: 'Jully'},
  { id: 7, email: 'Clifford', firstName: 'Ferrara'},
  { id: 8, email: 'Frances', firstName: 'Rossini'},
  { id: 9, email: 'Roxie', firstName: 'Harvey'},
];

export default function DataTable() {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{ height: 400, width: '80%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ overflow: 'clip' }}
            />
    </div>

    </div>
  );
}
