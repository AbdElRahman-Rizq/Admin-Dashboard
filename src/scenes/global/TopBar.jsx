import { Box,IconButton,InputBase,useTheme } from "@mui/material";
import { useContext } from "react";
import { tokens } from "../../theme";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { ColorModeContext } from "../../App";
const Topbar=()=>{
        const theme=useTheme();
        const colors=tokens(theme.palette.mode)
        const colorMode=useContext(ColorModeContext);
        return(            
            <Box display="flex" justifyContent="space-between" p={2}>
            {/* searchBar */}
                <Box display={"flex"} backgroundColor={colors.primary[400]} borderRadius="3px">
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