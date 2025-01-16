import { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";

import {
  Container,
  InfoBackground,
  Subtitle,
  Title,
  SecondTitle,
  ButtonsContainer,
} from "./styles";
import { Pill } from "@components/Pill";
import { Button } from "@components/Button";
import { mealRemoveByDate } from "@storage/meal/mealRemoveByDate";

type RouteParams = {
  meal: MealStorageDTO;
};

export function MealInfo() {
  const route = useRoute();
  const navigation = useNavigation();
  const { meal } = route.params as RouteParams;

  async function handleRemoveMeal() {
    await mealRemoveByDate(meal.name, meal.date);
    navigation.navigate("home");
  }

  return (
    <Container type={meal.isInDiet ? "PRIMARY" : "SECONDARY"}>
      <Header
        icon="GoBack"
        text="Refeição"
        onPress={() => navigation.navigate("home")}
        type={meal.isInDiet ? "PRIMARY" : "SECONDARY"}
      />
      <InfoBackground>
        <Title>{meal.name}</Title>
        <Subtitle>{meal.description}</Subtitle>

        <SecondTitle>Data e hora </SecondTitle>
        <Subtitle>{`${meal.date} às ${meal.time}`}</Subtitle>
        <Pill
          type={meal.isInDiet ? "PRIMARY" : "SECONDARY"}
          text={meal.isInDiet ? "dentro da dieta" : "fora da dieta"}
        />

        <ButtonsContainer>
          <Button title="Editar refeição" icon="EDIT" />
          <Button
            title="Excluir refeição"
            icon="DELETE"
            type="SECONDARY"
            onPress={handleRemoveMeal}
          />
        </ButtonsContainer>
      </InfoBackground>
    </Container>
  );
}
