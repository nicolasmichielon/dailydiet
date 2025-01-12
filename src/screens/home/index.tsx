import { Container } from "./styles";

import { FlatList } from "react-native";

import { HomeHeader } from "@components/HomeHeader";
import { InfoBox } from "@components/InfoBox";
import { Button } from "@components/Button/Index";
import { Meal } from "@components/Meal";
import { useState } from "react";
import { ListHeader } from "@components/ListHeader";

type Props = {
  meal: {
    name: string;
    time: string;
    isInDiet: boolean;
  };
};

export function Home() {
  const [meals, setMeals] = useState<Props[]>([
    {
      meal: {
        name: "Breakfast",
        time: "08:00",
        isInDiet: true,
      },
    },
    {
      meal: { name: "Lunch", time: "12:00", isInDiet: false },
    },
    {
      meal: { name: "Dinner", time: "19:00", isInDiet: true },
    },
  ]);

  return (
    <Container>
      <HomeHeader />
      <InfoBox />

      <Button
        title="Nova refeição"
        textAbove="Refeições"
        icon="ADD"
        type="PRIMARY"
      />
      <FlatList
        data={meals}
        keyExtractor={(item) => item.meal.time}
        renderItem={({ item }) => (
          <Meal
            timeText={item.meal.time}
            mealName={item.meal.name}
            isInDiet={item.meal.isInDiet}
          />
        )}
        contentContainerStyle={{ gap: 8 }}
        ListHeaderComponent={<ListHeader text="12.08.22" />}
      />
    </Container>
  );
}
