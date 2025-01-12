import theme from "src/theme";
import styled from "styled-components/native";
import { Circle } from "phosphor-react-native";

type Props = {
  isInDiet: boolean;
};

export const Container = styled.View`
  height: 50px;
  width: 100%;

  flex-direction: row;
  align-items: center;

  border-width: 1px;
  border-color: ${theme.COLORS.GRAY_500};
  border-radius: 6px;

  padding-left: 12px;
  padding-right: 16px;
`;

export const TimeText = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.XS}px;
  font-family: ${theme.FONT_FAMILY.BOLD};

  border-right-width: 1px;
  padding-right: 12px;
  border-color: ${theme.COLORS.GRAY_400};
`;

export const MealNameText = styled.Text`
  margin-left: 12px;
  flex: 1;

  color: ${theme.COLORS.GRAY_200};
  font-size: ${theme.FONT_SIZE.MD}px;
`;

export const IsInDietIcon = styled.View<{ isInDiet: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 10px;

  background-color: ${({ isInDiet }: Props) =>
    isInDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
