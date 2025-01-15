import {
  Container,
  Title,
  Subtitle,
  Icon,
  InfoBoxTypeStyleProps,
} from "./styles";

type Props = {
  percentage: number;
  type: InfoBoxTypeStyleProps;
};

export function InfoBox({ percentage, type = "PRIMARY" }: Props) {
  return (
    <Container type={type}>
      <Title>
        {percentage > 0
          ? `${percentage.toFixed(2).replace(".", ",")}%`
          : `100%`}
      </Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
      <Icon type={type} />
    </Container>
  );
}
