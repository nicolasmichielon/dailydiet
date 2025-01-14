import {
  Container,
  Title,
  Subtitle,
  Icon,
  InfoBoxTypeStyleProps,
} from "./styles";

type Props = {
  percentage: string;
  type: InfoBoxTypeStyleProps;
};

export function InfoBox({ percentage, type = "PRIMARY" }: Props) {
  return (
    <Container type={type}>
      <Title>{percentage}</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
      <Icon type={type} />
    </Container>
  );
}
