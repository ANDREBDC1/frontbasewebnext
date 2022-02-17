import React from "react";
import {
  PageTileContainer,
  PageTitleStyled,
  PageSubTitleStyled,
} from "./styles";

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <PageTileContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubTitleStyled>{subtitle}</PageSubTitleStyled>
    </PageTileContainer>
  );
};

export default PageTitle;
