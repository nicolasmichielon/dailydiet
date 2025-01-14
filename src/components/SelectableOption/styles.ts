import theme from "src/theme";
import styled from "styled-components/native";

export type SelectableOptionStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: SelectableOptionStyleProps;
  isSelected: boolean;
};

export const Container = styled.TouchableOpacity<Props>`
  height: 50px;
  width: 47%;
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${({ isSelected, type }: Props) =>
    isSelected
      ? type === "PRIMARY"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};

  border-width: ${({ isSelected }: Props) => (isSelected ? 1 : 0)}px;
  border-color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const IsInDietIcon = styled.View<{ isInDiet: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  margin-right: 8px;

  background-color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
