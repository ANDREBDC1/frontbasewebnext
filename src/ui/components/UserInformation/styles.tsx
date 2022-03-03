import { styled } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

// 1rf uma fração vai preencher todo o resto que esta diponivel

export const Container = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas: 
  'avatar name'
  'avatar description';
  padding: ${({theme}) => theme.spacing(3)};
  background-color: ${({theme}) => theme.palette.grey[50]};
  align-items:center;
  gap: ${({theme}) => theme.spacing(0.5) + ' ' +theme.spacing(2)};
`;


// aspect-ratio: 1 matenhe a propoção iguais altura e largura sempre iguais
export const UserAvatar = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
 
`;

export const UserName = styled("div")`
  grid-area: name;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const UserDescription = styled("div")`
  grid-area: description;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.palette.text.secondary};
`;
