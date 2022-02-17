import React from "react";
import { Toolbar, Container } from "@material-ui/core";
import { PageHeaderContainer, HeaderLogo } from "./styles";

interface PageHeaderProps {}

const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <PageHeaderContainer>
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/logos/logo.svg"} alt="AppBase" />
      </Toolbar>
    </PageHeaderContainer>
  );
};

export default PageHeader;
