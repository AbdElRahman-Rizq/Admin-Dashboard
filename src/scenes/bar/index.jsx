import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/Bar-chart";
import "./style.css";

const Bar = () => {
  return (
    <Box m="20px" style={{color:"black"}}>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh"
      className="BarChart"
      >
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;