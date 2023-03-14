import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataTeam} from "../../data/mockData";
import Header from "../../components/Header";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import"./style.css";
const Sidebar=()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID"},
        { field: "name", headerName: "Name",width:180 },
        { field: "age", headerName: "Age",width:120 },
        {field: "phone",headerName: "Phone Number",minWidth:180},
        { field: "email", headerName: "Email", width:200},
        {
            field: "accessLevel",
            headerName: "Access Level",width:110,
            
            renderCell:({row:{access}})=>{
                return(
                    <Box width="100%"  display="flex" p="5px" 
                    justifyContent="center"
                        backgroundColor={colors.greenAccent[600]}
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <span>{access}</span>
                        </Box>
                )
            }
        }
    ]
    return(   
        <Box m="20px">
        <Header title="TEAM" subtitle="Managing the Team Members"></Header>     
        <Box  m="40px 40px 0 10px"
        className="tableForMobile"
        height="75vh"
        sx={{
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
                
              },
            "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-root":{
                  
                  fontSize:"0.75rem !important",
              }
        }}>
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
        </Box>
        )
}
export default Sidebar;