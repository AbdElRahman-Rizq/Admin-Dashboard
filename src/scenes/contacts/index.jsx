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
        headerName: "ID"
    },
    {field:"name",
    headerName: "Name",
    flex: .8,
    cellClassName: "name-column",
},{
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
},
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: .5,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: .5,
    }
    ]
    return(  
        <Box m="20px">
       <Header subtitle={"List of Contacts for Future Reference"} title={"CONTACTS"}/>
       <Box mt="30px"
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