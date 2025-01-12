import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import theme from "src/theme";
import { Plus, Trash, PencilSimpleLine } from "phosphor-react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";
export type ButtonIconStyleProps = "ADD" | "EDIT" | "DELETE" | "NONE";

type Props = {
  type: ButtonTypeStyleProps;
  icon: ButtonIconStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  width: 100%;
  height: 50px;

  background-color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  border-width: ${({ type }: Props) => (type === "PRIMARY" ? 0 : 1)}px;
  border-color: ${theme.COLORS.GRAY_100};
  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
`;

export const IconAdd = styled(Plus).attrs({ size: 18 })`
  color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
  margin-right: 12px;
`;

export const IconEdit = styled(PencilSimpleLine).attrs({ size: 18 })`
  color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
  margin-right: 12px;
`;

export const IconDelete = styled(Trash).attrs({ size: 18 })`
  color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
  margin-right: 12px;
`;

export const TextOutside = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_100};

  margin-bottom: 8px;
`;
