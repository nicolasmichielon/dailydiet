import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealStorageDTO } from "./mealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealsGetByDate(date: string) {
  try {
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${date}`);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    throw error;
  }
}
