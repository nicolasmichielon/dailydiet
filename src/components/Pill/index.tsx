import { Container, IsInDietIcon, PillTypeStyleProps, Title } from "./styles";

type Props = {
  type: PillTypeStyleProps;
  text: string;
};

export function Pill({ type, text }: Props) {
  return (
    <Container>
      <IsInDietIcon type={type} />
      <Title>{text}</Title>
    </Container>
  );
}
