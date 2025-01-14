import { Container, TextInputField, InputStyleTypeProps, Title } from "./style";
import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  type: InputStyleTypeProps;
  text: string;
};

export function Input({ type = "SMALL", text = "", inputRef, ...rest }: Props) {
  return (
    <Container type={type}>
      <Title>{text}</Title>
      <TextInputField type={type} ref={inputRef} {...rest}></TextInputField>
    </Container>
  );
}
