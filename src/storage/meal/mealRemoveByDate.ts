import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetByDate } from "./mealsGetByDate";
import { dateRemove } from "@storage/date/dateRemove";

export async function mealRemoveByDate(mealName: string, date: string) {
  try {
    const storage = await mealsGetByDate(date);

    const filtered = storage.filter((meal) => meal.name !== mealName);
    const meals = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${MEAL_COLLECTION}-${date}`, meals);

    if (storage.length < 2) {
      await dateRemove(date);
    }
  } catch (error) {
    throw error;
  }
}
