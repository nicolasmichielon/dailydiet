import {
  Container,
  Title,
  Subtitle,
  Icon,
  InfoBoxTypeStyleProps,
} from "./styles";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  percentage: number;
  type: InfoBoxTypeStyleProps;
};

export function InfoBox({ percentage, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest} type={type}>
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
