import React from "react";

import { Container, UserName, UserAvatar, UserDescription } from "./styles";

interface UserInformationProps {
  picture: string;
  name: string;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  picture,
  name,
  description,
}) => {
  return (
    <Container>
      <UserAvatar src={picture} />
      <UserName>{name}</UserName>
      <UserDescription>{description}</UserDescription>
    </Container>
  );
};

export default UserInformation;
