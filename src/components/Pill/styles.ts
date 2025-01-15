import theme from "src/theme";
import styled from "styled-components/native";

export type PillTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: PillTypeStyleProps;
};

export const Container = styled.View`
  height: 34px;
  width: 144px;
  padding: 8px;

  background-color: ${theme.COLORS.GRAY_600};

  border-radius: 20px;
  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`;

export const IsInDietIcon = styled.View<{ isInDiet: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  margin-right: 8px;

  background-color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
