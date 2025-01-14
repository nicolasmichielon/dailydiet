import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetByDate } from "./mealsGetByDate";
import { MealStorageDTO } from "./mealStorageDTO";
import { datesGetAll } from "@storage/date/datesGetAll";
import { dateCreate } from "@storage/date/dateCreate";

export async function mealAddByDate(newMeal: MealStorageDTO, date: string) {
  try {
    const allDates = await datesGetAll();
    if (!allDates.includes(date)) {
      await dateCreate(date);
    }

    const storedMeals = await mealsGetByDate(date);

    newMeal.name = newMeal.name.trim();

    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(`${MEAL_COLLECTION}-${date}`, storage);
  } catch (error) {
    throw error;
  }
}
