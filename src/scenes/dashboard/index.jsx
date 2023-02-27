import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { mockTransactions } from "../../data/mockData";


const Dashboard=()=>{
const theme=useTheme(),
colors=tokens(theme.palette.mode)

  return(
   <Box 
   m="20px">
    {/* Row 1  Header*/}
    <Box 
    display={"flex"}
    justifyContent="space-between"
    >
<Header title={"DASHBOARD"} subtitle={"Welcome to your dashboard"} />
    <Box>
    <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>

    </Box>
    </Box>
    {/* Row 2 */}
    <Box
    display={"flex"}
    >
    <Box
    p="2%"
    sx={{            
            backgroundColor:colors.primary[400],
            width:"25%"
    }}
    >
        <StatBox 
         title="12,361"
         subtitle="Emails Sent"
         progress="0.75"
         increase="+14%"
         icon={
             <EmailIcon
             sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
           />
         }
        />
     </Box>
     <Box 
    m="0 1%" 
    sx={{
            padding:"2%",
            backgroundColor:colors.primary[400],
            width:"25%"
    }}
    >
     <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
          </Box>
<Box 
mr="1%"
    sx={{
            padding:"2%",
            backgroundColor:colors.primary[400],
            width:"25%"
    }}
    >
        <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box     
    sx={{
            padding:"2%",
            backgroundColor:colors.primary[400],
            width:"25%"
    }}
    >
      <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />  
        </Box>
    </Box>
    {/* Row 3 */}
  {/* Recent Transaction */}
<Box
          width="25%"
          maxHeight={"340px"}
           backgroundColor={colors.primary[400]}
           textAlign={"center"}
          overflow="auto"
          mt="1%"
>
         <Box
            display="flex"
            alignContent="center"
            justifyContent="space-between"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="10px 15px"            
          >
            <h3 color={colors.grey[100]}
            style={{margin:"auto"}}
            >
              Recent Transactions
            </h3>
          </Box> 
        {mockTransactions.map((transaction, i) => (
            <Box
              key={`${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
               <h4
               style={{
                  margin:"0",
                  paddingTop:"2%",
                 color:`${colors.greenAccent[500]}`,                 
                 fontWeight:"600"
                }}
                >
                
                  {transaction.txId}
               </h4>
                
                <p color={colors.grey[100]}
                style={{
                  margin:"0"
                }}
                >
                  {transaction.user}
                </p>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
            
                </Box>                
            
        </Box>
    
      )
}
export default Dashboard;