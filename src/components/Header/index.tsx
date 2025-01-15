import React from "react";
import { Container, Title } from "./styles";
import { GoBackButton } from "@components/GoBackButton";

type HeaderIconTypeProps = "GoBack";

type Props = {
  text: string;
  icon: HeaderIconTypeProps;
  onPress: () => void;
};

export function Header({ text, icon, onPress }: Props) {
  return (
    <Container>
      {icon === "GoBack" ? <GoBackButton onPress={onPress} /> : <></>}
      <Title>{text}</Title>
    </Container>
  );
}
