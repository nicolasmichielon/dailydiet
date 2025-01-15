import { SafeAreaView } from "react-native-safe-area-context";
import theme from "src/theme";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.COLORS.GRAY_500};
`;

export const Form = styled.View`
  background-color: ${theme.COLORS.WHITE};
  flex: 1;
  border-radius: 20px 20px 0px 0px;
  padding: 24px;
  padding-top: 40px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_200};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-weight: bold;

  margin-bottom: 4px;
`;
