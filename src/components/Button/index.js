import styled from 'styled-components';
import styledMap from 'styled-map';

const Button = styled.button`
  background: ${props =>
    styledMap({
      primary: props.theme.colors.primary,
      secondary: props.theme.colors.secondary,
      transparent: 'transparent',
      default: props.theme.colors.grayMid,
    })};
  color: ${props => (props.transparent ? props.theme.colors.grayMid : props.theme.colors.white)};
  border: 0;
  font-size: ${props => props.theme.fontSizes.md};
  padding: ${props => props.theme.space.xs};
`;

export default Button;
