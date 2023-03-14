import {Box ,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Summary } from "./FAQ";
const FAQ=()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(        
        <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
        <Accordion m="0px">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Summary style={{ color: colors.greenAccent[500] }}> 
                An Important Question
                </Summary>
        </AccordionSummary>
        <AccordionDetails style={
          {maxHeight:"11vh",
          padding:"0 15px"}}>
          <h5 >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </h5>
        </AccordionDetails>
        </Accordion>
        <Accordion m="0px">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Summary style={{ color: colors.greenAccent[500] }}> 
            Another Important Question
                </Summary>
        </AccordionSummary>
        <AccordionDetails style={
          {maxHeight:"11vh",
          padding:"0 15px"}}>
          <h5 >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </h5>
        </AccordionDetails>
        </Accordion>
        <Accordion m="0px">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Summary style={{ color: colors.greenAccent[500] }}> 
            Your Favorite Question
                </Summary>
        </AccordionSummary>
        <AccordionDetails style={
          {maxHeight:"11vh",
          padding:"0 15px"}}>
          <h5 >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </h5>
        </AccordionDetails>
        </Accordion>
        <Accordion mb="200px">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Summary style={{ color: colors.greenAccent[500] }}> 
            The Final Question
                </Summary>
        </AccordionSummary>
        <AccordionDetails style={
          {maxHeight:"11vh",
          padding:"0 15px"}}
          >
          <h5 >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </h5>
        </AccordionDetails>
        </Accordion>
        </Box>
        )
}
export default FAQ;