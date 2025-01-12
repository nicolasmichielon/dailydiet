import React from "react";
import {
  Container,
  Title,
  ButtonTypeStyleProps,
  Icon,
  ButtonIconStyleProps,
  TextOutside,
} from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: ButtonIconStyleProps;
  textAbove?: string;
};

export function Button({
  title = "",
  type = "PRIMARY",
  icon = "ADD",
  textAbove = "",
  ...rest
}: Props) {
  return (
    <>
      {textAbove.length > 0 ? <TextOutside>{textAbove}</TextOutside> : null}
      <Container type={type} {...rest}>
        <Icon icon={icon} type={type} />
        <Title type={type}>{title}</Title>
      </Container>
    </>
  );
}
