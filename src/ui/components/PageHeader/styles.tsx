import { styled } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";

export const PageHeaderContainer = styled(AppBar)`
  position: sticky;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgb(0, 0, 0, 0.05);
  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: ${({ theme }) => theme.spacing(12.5)};
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 25px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 47px;
  }
`;
