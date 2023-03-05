import { Sidebar, Menu, MenuItem,sidebarClasses} from 'react-pro-sidebar';
import  Styled from '@emotion/styled';
import { tokens } from "../../theme";
import { Link } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import { useState } from 'react';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import "./style.css";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";




const SideBar=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    const [collapse,setCollapse]=useState(false);
    const [selected,setSelected]=useState('Dashboard');
   const StyledMenuItem =Styled(MenuItem)`
   a{

       &:hover{
           background-color:${colors.grey[600]}
        }
    }
    `
    // function to render Menu Items
    const Item =({title,icon,rlink,selected,setSelected,collapse}) =>{
return(
        <StyledMenuItem routerLink={rlink} 
        icon={icon}
        active={selected===title} 
             
        onClick={()=>setSelected(title)}        
        >
     {!collapse&& <h4>{title}</h4>}
        </StyledMenuItem>)
        }
    return(        
       <Box 
       >
        <Sidebar 
           className='sideBar'       
        style={{
            height:'100%',
            minWidth:collapse?'5vw':'',width:collapse?'6vw':'',margin:0
    ,display:"flex"
    }} 
    
    rootStyles={{
            
    [`.${sidebarClasses.container}`]: {
      backgroundColor: 'transparent !important' ,
    } }}
    
    >
<Menu 
 menuItemStyles={{
      button: ({active}) => {
          return {
            backgroundColor: active ? colors.grey[500] : undefined,
          };
      },
    }}
 >
    <StyledMenuItem onClick={()=>setCollapse(!collapse)}
    icon={collapse&&<MenuOutlinedIcon />}
    style={{
        margin: "10px 0 20px 0",
        color: colors.grey[100],
       
    }}
    >
        {/* Logo & Menu icon */}
{!collapse&& <Box display={'flex'} m={`2% 0 2% 0`} justifyContent="space-between" alignItems="center">
    <h2>ADMINIS</h2>
    <MenuOutlinedIcon />
    </Box>}
    </StyledMenuItem>
    {/* Admin info */}
    {!collapse&&
     <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        
     <img
       alt="profile-user"
       width="100px"
       height="100px"
       src="logo192.png"
       style={{ cursor: "pointer", borderRadius: "50%" }}
       />
     
       <h3>AbdElRahman Rizq</h3>
   </Box>
   }
   {/* Screens {Menu Items} */}
   <Item 
   rlink={<Link to="/" />}
   title={"Dashboard"}
   icon={<HomeOutlinedIcon/>}
   selected={selected}
   collapse={collapse}
   setSelected={setSelected}
   />
   <Item 
   rlink={<Link to="/Team" />}
   title={"Manage Team"}
   icon={<PeopleOutlinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   collapse={collapse}
   />
    <Item 
   rlink={<Link to="/Contacts" />}
   title={"Contacts Information"}
   icon={<ContactsOutlinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   collapse={collapse}
   />
    <Item 
   rlink={<Link to="/Invoices" />}
   title={"Invoices Balances"}
   icon={<ReceiptOutlinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   collapse={collapse}
   />
    <Item 
   rlink={<Link to="/Form" />}
   title={"Profile Form"}
   icon={<PersonOutlinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   collapse={collapse}
   />
  
   <Item 
   rlink={<Link to="/FAQ" />}
   title={"FAQ Page"}
   icon={<HelpOutlineOutlinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   collapse={collapse}
   />
   <Item 
   rlink={<Link to="/BarChart" />}
   title={"Bar Chart"}
   icon={<BarChartOutlinedIcon/>}
   selected={selected}
   setSelected={setSelected}
   collapse={collapse}
   />
  
</Menu>
        </Sidebar>
       </Box>
        )
}
export default SideBar;
