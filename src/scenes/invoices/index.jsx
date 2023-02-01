import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {  mockDataInvoices } from "../../data/mockData";

const Invoices=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const columns=[
        {field:"id",
        headerName: "ID"
    },
    {field:"name",
    headerName: "Name",
    flex: .7,
    cellClassName: "name-column",
},
    {
      field: "email",
      headerName: "Email",
      flex: .7,
    },
    {
        field: "phone",
        headerName: "Phone Mumber",
        flex: .5,
      },
    {
      field: "cost",
      headerName: "Cost",
      flex: .5,
    cellClassName: "cost-column",
    renderCell:(number)=>(
        <h3>
            ${number.row.cost}
        </h3>
    )
    },
    ]
    return(  
        <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
       <Box mt="30px"
       height="75vh"
       b="0"
       sx={{
        "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .css-1kwdphh-MuiDataGrid-virtualScrollerContent":{
            backgroundColor: colors.primary[400],
          },
        "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .css-1rrzeca-MuiButtonBase-root-MuiButton-root":{
            color: colors.primary[200],
          },
          "& .name-column,.cost-column":{
            color: colors.greenAccent[300]
          }
       }}
       >
       <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
       </Box>
        </Box>      
        )
}
export default Invoices;