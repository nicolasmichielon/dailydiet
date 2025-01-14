import React from "react";
import { Container, Title, IsInDietIcon } from "./styles";

type Props = {
  text: string;
  isSelected: boolean;
  onPress: () => void;
  type?: "PRIMARY" | "SECONDARY";
};

export function SelectableOption({
  text,
  isSelected,
  onPress,
  type = "PRIMARY",
}: Props) {
  return (
    <Container isSelected={isSelected} type={type} onPress={onPress}>
      <IsInDietIcon isInDiet={isSelected} type={type} />
      <Title>{text}</Title>
    </Container>
  );
}
