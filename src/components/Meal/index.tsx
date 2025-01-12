import { Container, IsInDietIcon, MealNameText, TimeText } from "./styles";

type Props = {
  timeText: string;
  mealName: string;
  isInDiet?: boolean;
};

export function Meal({ timeText = "", mealName = "", isInDiet = true }: Props) {
  return (
    <Container>
      <TimeText>{timeText}</TimeText>
      <MealNameText>{mealName}</MealNameText>
      <IsInDietIcon isInDiet={isInDiet}></IsInDietIcon>
    </Container>
  );
}
