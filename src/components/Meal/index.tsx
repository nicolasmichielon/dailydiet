import { Container, IsInDietIcon, MealNameText, TimeText } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  timeText: string;
  mealName: string;
  isInDiet?: boolean;
};

export function Meal({
  timeText = "",
  mealName = "",
  isInDiet = true,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <TimeText>{timeText}</TimeText>
      <MealNameText>{mealName}</MealNameText>
      <IsInDietIcon isInDiet={isInDiet}></IsInDietIcon>
    </Container>
  );
}
