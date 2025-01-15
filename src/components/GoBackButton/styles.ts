import { ArrowLeft } from "phosphor-react-native";
import theme from "src/theme";
import styled from "styled-components/native";

export const GoBackButtonContainer = styled.TouchableOpacity`
  position: absolute;
  left: 24;
`;

export const GoBackIcon = styled(ArrowLeft).attrs({
  size: 24,
  color: theme.COLORS.GRAY_200,
})``;
