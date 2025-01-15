import { SafeAreaView } from "react-native-safe-area-context";
import theme from "src/theme";
import styled from "styled-components/native";

export type ContainerBackgroundColorTypeProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ContainerBackgroundColorTypeProps;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const InfoBackground = styled.View`
  background-color: ${theme.COLORS.WHITE};
  flex: 1;
  border-radius: 20px 20px 0px 0px;
  padding: 24px;
  padding-top: 40px;
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_100};
  font-weight: bold;

  margin-bottom: 8px;
`;

export const SecondTitle = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_100};
  font-weight: bold;

  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-size: ${theme.FONT_SIZE.MD};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_200};

  margin-bottom: 24px;
`;
