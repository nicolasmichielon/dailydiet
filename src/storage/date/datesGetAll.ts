import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATE_COLLECTION } from "@storage/storageConfig";

export async function datesGetAll() {
  try {
    const storage = await AsyncStorage.getItem(DATE_COLLECTION);

    const dates: string[] = storage ? JSON.parse(storage) : [];
    console.log(`Dates collection: ${dates}`);
    return dates;
  } catch (error) {
    throw error;
  }
}
