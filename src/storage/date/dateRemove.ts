import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATE_COLLECTION, MEAL_COLLECTION } from "@storage/storageConfig";

import { datesGetAll } from "./datesGetAll";

export async function dateRemove(dateDeleted: string) {
  try {
    const storedDates = await datesGetAll();
    const dates = storedDates.filter((date) => date !== dateDeleted);

    await AsyncStorage.setItem(DATE_COLLECTION, JSON.stringify(dates));
    await AsyncStorage.removeItem(`${MEAL_COLLECTION}-${dateDeleted}`);
  } catch (error) {
    throw error;
  }
}
