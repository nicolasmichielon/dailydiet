import theme from "src/theme";
import styled from "styled-components/native";
import inDietImageSource from "@assets/inDiet.png";
import notInDietImageSource from "@assets/notInDiet.png";

type TextTitleTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: TextTitleTypeStyleProps;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.WHITE};
  padding-top: 160px;
  padding-inline: 32px;

  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ type }: Props) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  font-size: ${theme.FONT_SIZE.XL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};

  text-align: center;
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};

  text-align: center;
`;

export const InDietImage = styled.Image.attrs({ source: inDietImageSource })`
  height: 288px;
  width: 244px;

  object-fit: contain;

  margin-top: 40px;
  margin-bottom: 32px;
`;

export const NotInDietImage = styled.Image.attrs({
  source: notInDietImageSource,
})`
  height: 288px;
  width: 244px;

  object-fit: contain;

  margin-top: 40px;
  margin-bottom: 32px;
`;
