import React from "react";
import {
  Container,
  Title,
  ButtonTypeStyleProps,
  IconAdd,
  IconEdit,
  IconDelete,
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
  const renderIcon = () => {
    switch (icon) {
      case "ADD":
        return <IconAdd type={type} />;
      case "EDIT":
        return <IconEdit type={type} />;
      case "DELETE":
        return <IconDelete type={type} />;
      default:
        return null;
    }
  };

  return (
    <>
      {textAbove.length > 0 ? <TextOutside>{textAbove}</TextOutside> : null}
      <Container type={type} {...rest}>
        {renderIcon()}
        <Title type={type}>{title}</Title>
      </Container>
    </>
  );
}
