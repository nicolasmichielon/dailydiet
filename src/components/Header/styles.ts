import theme from "src/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${theme.COLORS.GRAY_500};
  height: 104px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-weight: bold;
`;
