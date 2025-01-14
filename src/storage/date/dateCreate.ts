import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { DATE_COLLECTION } from "@storage/storageConfig";
import { datesGetAll } from "./datesGetAll";

export async function dateCreate(newDate: string) {
  try {
    const storedDates = await datesGetAll();

    const dateAlreadyExists = storedDates.includes(newDate);

    if (dateAlreadyExists) {
      throw new AppError("Essa data já está cadastrada.");
    }

    const storage = JSON.stringify([...storedDates, newDate]);
    await AsyncStorage.setItem(DATE_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
