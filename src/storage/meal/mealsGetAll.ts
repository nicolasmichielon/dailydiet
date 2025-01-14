import { mealsGetByDate } from "./mealsGetByDate";
import { datesGetAll } from "@storage/date/datesGetAll";
import { MealStorageDTO } from "./mealStorageDTO";

export async function mealsGetAll() {
  try {
    const dates = await datesGetAll();
    let allMeals: MealStorageDTO[] = [];
    for (const date of dates) {
      const meals = await mealsGetByDate(date);
      allMeals = allMeals.concat(meals);
    }
    return allMeals;
  } catch (error) {
    console.log(error);
  }
}
