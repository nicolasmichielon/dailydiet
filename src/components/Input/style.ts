import { TextInput } from "react-native";
import theme from "src/theme";
import styled from "styled-components/native";

export type InputStyleTypeProps = "SMALL" | "DEFAULT" | "LARGE";

type Props = {
  type: InputStyleTypeProps;
};

export const Container = styled.View`
  width: ${({ type }: Props) => (type === "SMALL" ? 47 : 100)}%;
`;

export const TextInputField = styled(TextInput).attrs({
  multiline: true,
  textAlignVertical: "top",
  autoCorrect: false,
})`
  height: ${({ type }: Props) => (type === "LARGE" ? 120 : 48)}px;
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_100};

  border-width: 1px;
  border-radius: 6px;
  border-color: ${theme.COLORS.GRAY_500};

  vertical-align: top;
  text-align: left;

  margin-bottom: 24px;
  padding: 14px;
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_200};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-weight: bold;

  margin-bottom: 4px;
`;
