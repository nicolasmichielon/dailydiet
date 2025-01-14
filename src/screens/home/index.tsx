import { Container } from "./styles";
import { datesGetAll } from "@storage/date/datesGetAll";

import { FlatList, Alert } from "react-native";

import { HomeHeader } from "@components/HomeHeader";
import { InfoBox } from "@components/InfoBox";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { useCallback, useEffect, useState } from "react";
import { ListHeader } from "@components/ListHeader";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { mealsGetByDate } from "@storage/meal/mealsGetByDate";
import React from "react";

type Props = {
  name: string;
  time: string;
  date: string;
  isInDiet: boolean;
};

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [dates, setDates] = useState<string[]>([]);
  const [mealsByDate, setMealsByDate] = useState<{ [key: string]: Props[] }>(
    {}
  );

  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate("new");
  }

  async function fetchDates() {
    try {
      setIsLoading(true);
      const data = await datesGetAll();
      data.sort((a, b) => {
        const [dayA, monthA, yearA] = a.split(".").map(Number);
        const [dayB, monthB, yearB] = b.split(".").map(Number);
        return (
          new Date(yearB, monthB - 1, dayB).getTime() -
          new Date(yearA, monthA - 1, dayA).getTime()
        );
      }); // Sort dates in reverse chronological order
      console.log(`Dates fetched: ${data}`);
      await setDates(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Datas", "Não foi possível carregar as datas");
    } finally {
      setIsLoading(false);
    }
  }

  function fetchAllMeals() {
    dates.forEach((date) => {
      console.log(`Date in focus effect: ${date}`);
      fetchMealsByDate(date);
    });
  }

  async function fetchMealsByDate(date: string) {
    try {
      setIsLoading(true);
      const meals = await mealsGetByDate(date);
      meals.sort((a, b) => a.time.localeCompare(b.time)); // Sort meals by time
      await setMealsByDate((prev) => ({ ...prev, [date]: meals }));
      console.log(`Meals fectched by date: ${meals}`);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Refeições",
        "Não foi possível carregar as refeições de uma das datas"
      );
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchDates();
    }, [])
  );

  useEffect(() => {
    fetchAllMeals();
  }, [dates]);

  return (
    <Container>
      <HomeHeader />
      <InfoBox />
      <Button
        title="Nova refeição"
        textAbove="Refeições"
        icon="ADD"
        type="PRIMARY"
        onPress={handleNewMeal}
      />
      {dates.map((date) => (
        <FlatList
          key={date}
          data={mealsByDate[date] || []}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Meal
              timeText={item.time}
              mealName={item.name}
              isInDiet={item.isInDiet}
            />
          )}
          contentContainerStyle={{ gap: 8 }}
          ListHeaderComponent={<ListHeader text={date} />}
          scrollEnabled={false}
          windowSize={30}
          style={{ flexGrow: 0 }}
        />
      ))}
    </Container>
  );
}
