import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Container,
  StatisticsDashboard,
  Title,
  InfoContainer,
  Subtitle,
  StatisticsStyleTypeProps,
  DashTitle,
  DashBox,
  Row,
  DashBoxTitle,
} from "./styles";
import { GoBackButton } from "@components/GoBackButton";

type RouteParams = {
  percentage: number;
  type: StatisticsStyleTypeProps;
  meals: {};
};

export function Statistics() {
  const route = useRoute();
  const navigation = useNavigation();
  const { percentage, meals } = route.params as RouteParams;

  const allMeals = Object.values(meals).flat();
  const dietMealsCount = allMeals.filter((meal: any) => meal.isInDiet).length;
  const nonDietMealsCount = allMeals.length - dietMealsCount;
  const totalMealsCount = allMeals.length;

  // Sort meals by date and time
  allMeals.sort((a: any, b: any) => {
    const dateA = new Date(
      `${a.date.split(".").reverse().join("-")}T${a.time}`
    );
    const dateB = new Date(
      `${b.date.split(".").reverse().join("-")}T${b.time}`
    );
    return dateA.getTime() - dateB.getTime();
  });

  let maxSequence = 0;
  let currentSequence = 0;

  allMeals.forEach((meal: any) => {
    if (meal.isInDiet) {
      currentSequence++;
      if (currentSequence > maxSequence) {
        maxSequence = currentSequence;
      }
    } else {
      currentSequence = 0;
    }
  });

  return (
    <Container
      type={percentage > 60 || percentage === 0 ? "PRIMARY" : "SECONDARY"}
    >
      <GoBackButton
        style={{ top: 56 }}
        onPress={() => navigation.navigate("home")}
      />
      <InfoContainer>
        <Title>
          {percentage > 0
            ? `${percentage.toFixed(2).replace(".", ",")}%`
            : `100%`}
        </Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </InfoContainer>
      <StatisticsDashboard>
        <DashTitle>Estatísticas gerais</DashTitle>
        <DashBox type="NEUTRAL">
          <DashBoxTitle>{totalMealsCount}</DashBoxTitle>
          <Subtitle>refeições registradas</Subtitle>
        </DashBox>
        <DashBox type="NEUTRAL">
          <DashBoxTitle>{maxSequence}</DashBoxTitle>
          <Subtitle>melhor sequência de pratos dentro da dieta</Subtitle>
        </DashBox>
        <Row>
          <DashBox size="SMALL" type="PRIMARY">
            <DashBoxTitle>{dietMealsCount}</DashBoxTitle>
            <Subtitle>refeições dentro da dieta</Subtitle>
          </DashBox>
          <DashBox size="SMALL" type="SECONDARY">
            <DashBoxTitle>{nonDietMealsCount}</DashBoxTitle>
            <Subtitle>refeições fora da dieta</Subtitle>
          </DashBox>
        </Row>
      </StatisticsDashboard>
    </Container>
  );
}
