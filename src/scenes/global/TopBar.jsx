import { Box,IconButton,InputBase,useTheme } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import { tokens } from "../../theme";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ColorModeContext } from "../../App";
import SideBar from "./SideBar";
import"./style.css";

const Topbar=()=>{
        const theme=useTheme();
        const colors=tokens(theme.palette.mode)
        const colorMode=useContext(ColorModeContext);
        const [toggle,setToggle]=useState(false);

        const toggleFun=
            
        
        useCallback(()=>{

            setToggle(!toggle)
        }            
                
        ,[toggle]);
        return(            
            <Box 
            display="flex" justifyContent="space-between" p={2}>
{!toggle &&  <Box 
            className="MenueIcon"
            sx={{
                p:"1% 2% 0 0",
                display:"none",
                "& svg":{
                    fontSize:"1.5rem",                    
                }
                
            }}
        
            onClick={toggleFun}>
                <MenuOutlinedIcon />
            </Box>
}
{/* sideBar */}
{
toggle&&
<Box onClick={toggleFun}>

<SideBar IsMobile={true} />
</Box>
}



                       {/* searchBar */}              
                <Box 
                className="searchBar"
                display={"flex"} backgroundColor={colors.primary[400]} borderRadius="3px">
            <InputBase sx={{ml:2, flex:1}} placeholder="Search"></InputBase>
            {/* Serch Icon */}
            <IconButton sx={{p:1}} type="button">
                <SearchIcon />
            </IconButton>
                </Box>

                {/* Icons in left */}
                <Box display="flex">
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode==="dark"?(
                            <DarkModeOutlinedIcon />
                        ):(
                            <LightModeOutlinedIcon />
                        )}
                    </IconButton>
                    <IconButton>
                    <NotificationsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <PersonOutlinedIcon />
                    </IconButton>

                </Box>
            </Box>
        )
}
export default Topbar;