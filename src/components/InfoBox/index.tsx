import { Container, Title, Subtitle, Icon } from "./styles";

type Props = {
  percentage: string;
};

export function InfoBox({ percentage }: Props) {
  return (
    <Container>
      <Title>{percentage}</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
      <Icon />
    </Container>
  );
}
