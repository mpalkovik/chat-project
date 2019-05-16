import styled from "@emotion/styled";

interface IProps {
  url: string;
  backgroundSize?: boolean;
}
export const BackgroundImage = styled.div<IProps>`
  background: url(${props => props.url}) no-repeat center;
  background-size: ${({ backgroundSize }) => (backgroundSize ? "cover" : "")};
`;
