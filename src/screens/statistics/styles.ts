import { SafeAreaView } from "react-native-safe-area-context";
import theme from "src/theme";
import styled from "styled-components/native";

export type StatisticsStyleTypeProps = "PRIMARY" | "SECONDARY" | "NEUTRAL";
export type StatisticsStyleSizeProps = "SMALL" | "LARGE";

type Props = {
  type?: StatisticsStyleTypeProps;
  size?: StatisticsStyleSizeProps;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const StatisticsDashboard = styled.View`
  background-color: ${theme.COLORS.WHITE};
  flex: 1;
  border-radius: 20px;
  padding: 24px;
  padding-top: 40px;

  gap: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  height: 102px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 28px;
  margin-bottom: 18px;
`;

export const Title = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.XXL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: ${theme.COLORS.GRAY_200};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  text-align: center;
`;

export const DashTitle = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-weight: bold;
  text-align: center;

  margin-bottom: 8px;
`;

export const DashBox = styled.View`
  width: ${({ size }: Props) => (size === "SMALL" ? 47 : 100)}%;
  height: ${({ size }: Props) => (size === "SMALL" ? 107 : 90)}px;
  padding: 16px;

  background-color: ${({ type }: Props) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : type === "NEUTRAL"
      ? theme.COLORS.GRAY_600
      : theme.COLORS.RED_LIGHT};

  border-radius: 6px;
`;

export const DashBoxTitle = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.XL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  text-align: center;
`;
