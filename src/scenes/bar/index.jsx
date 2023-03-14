import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/Bar-chart";
import "./style.css";

const Bar = () => {
  return (
    <Box ml="15px" style={{color:"black"}} >
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh"
      className="BarChart All-screens"
      >        
        <BarChart />
      </Box>
      <Box height="75vh"
      className="BarChart for-mobile">
      <BarChart isMobile="true"/>

      </Box>
    </Box>
  );
};

export default Bar;