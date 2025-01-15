import { MealStorageDTO } from "@storage/meal/mealStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      new: undefined;
      statistics: {
        meals;
        percentage: number;
      };
      feedback: {
        isInDiet: boolean;
      };
      mealinfo: {
        meal: {};
      };
    }
  }
}
