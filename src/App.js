import { useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from"./scenes/global/TopBar";
import { createContext } from "react";
import SideBar from "./scenes/global/SideBar";
import { ProSidebarProvider } from 'react-pro-sidebar';
import{Route, Routes}from "react-router-dom";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/team/index.jsx";
import Contacts from "./scenes/contacts/index.jsx";
import Form from "./scenes/form/index";
import Invoices from "./scenes/invoices/index";
import Bar from "./scenes/bar/index";
import FAQ from "./scenes/faq/index";

export const ColorModeContext=createContext();
function App() {
  const[theme,colorMode]=useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <ProSidebarProvider>
<CssBaseline />
    <div className="app">
     <div className={"side-Bar"}>

      <SideBar />
     </div>
          <div className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="Team" element={<Team />}/>
              <Route path="Contacts" element={<Contacts />}/>
              <Route path="Invoices" element={<Invoices />}/>
              <Route path="Form" element={<Form/>}/>
              <Route path="FAQ" element={<FAQ/>}/>
              <Route path="BarChart" element={<Bar/>}/>
            </Routes>
          </div>
    </div>
    </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
