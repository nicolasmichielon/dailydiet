import styled from "styled-components/native";
import theme from "src/theme";
import { ArrowUpRight } from "phosphor-react-native";

export type InfoBoxTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: InfoBoxTypeStyleProps;
};

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 102px;
  border-radius: 8px;
  background-color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.XXL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
  color: ${theme.COLORS.GRAY_200};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(ArrowUpRight).attrs({ size: 24 })`
  color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  position: absolute;
  right: 8px;
  top: 8px;
`;
