import theme from "src/theme";
import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_100};

  margin-top: 32px;
`;
