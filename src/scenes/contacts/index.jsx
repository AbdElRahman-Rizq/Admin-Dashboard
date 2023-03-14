import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
const Contacts=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const columns=[
        {field:"id",
        headerName: "ID", minWidth:50
    },
    {field:"name",
    headerName: "Name",
    minWidth:180,
    cellClassName: "name-column",
},{
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
    minWidth:90
},
    {
      field: "address",
      headerName: "Address",
      minWidth:250,
    },
    {
      field: "city",
      headerName: "City",
      minWidth:130,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      minWidth:100,
    },
    {
      field:"registrarId",
      headerName: "Register_Id",
      minWidth:80,
    }
    ]
    return(  
        <Box m="20px">
       <Header subtitle={"List of Contacts for Future Reference"} title={"CONTACTS"}/>
       <Box m="30px 5px 0 0"
       height="75vh"
       b="0"
       sx={{
        "& .MuiDataGrid-root": {
            border: "none",
          },
        "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .css-1rrzeca-MuiButtonBase-root-MuiButton-root":{
            color: colors.primary[200],
          },
          "& .name-column":{
            color: colors.greenAccent[300]
          }
       }}
       >
       <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
       </Box>
        </Box>      
        )
}
export default Contacts;