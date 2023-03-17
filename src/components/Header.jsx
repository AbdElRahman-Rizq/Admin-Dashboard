import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { SubTitle, Title } from "./style";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="20px">
      <Title style={{ color: colors.grey[100] }}>{title}</Title>
      <SubTitle style={{ color: colors.greenAccent[400] }}>
      {subtitle}
      </SubTitle>  
    </Box>
  );
};

export default Header;
