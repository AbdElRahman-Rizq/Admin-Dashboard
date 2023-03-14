import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {  mockDataInvoices } from "../../data/mockData";
import"./style.css";

const Invoices=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const columns=[
        {field:"id",
        headerName: "ID",minWidth:90
    },
    {field:"name",
    headerName: "Name",
    
    cellClassName: "name-column",minWidth:180
},
    {
      field: "email",
      headerName: "Email",minWidth:230
    },
    {
      field: "phone",
      headerName: "Phone Number",
      minWidth:180
    },{
      field: "date",
      headerName: "Date",
      minWidth:180
    },
    {
      field: "cost",
      headerName: "Cost",
      minWidth:85,
    cellClassName: "cost-column",
    renderCell:(number)=>(
        <h3>
            ${number.row.cost}
        </h3>
    )
    },
    ]
    return(  
        <Box m="30px ">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
       <Box m="30px"
       className="tableForMobile"
       height="75vh"
       p="0"
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