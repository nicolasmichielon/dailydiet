import React from "react";
import { Container, HeaderTypeStyleProps, Title } from "./styles";
import { GoBackButton } from "@components/GoBackButton";
import { ViewProps } from "react-native";

type HeaderIconTypeProps = "GoBack";

type Props = ViewProps & {
  text: string;
  icon: HeaderIconTypeProps;
  onPress: () => void;
  type?: HeaderTypeStyleProps;
};

export function Header({
  text,
  icon,
  onPress,
  type = "NEUTRAL",
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      {icon === "GoBack" ? <GoBackButton onPress={onPress} /> : <></>}
      <Title>{text}</Title>
    </Container>
  );
}
