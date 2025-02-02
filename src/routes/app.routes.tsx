import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Feedback } from "@screens/feedback";
import { Home } from "@screens/home";
import { MealEdit } from "@screens/mealEdit";
import { MealInfo } from "@screens/mealInfo";
import { NewMeal } from "@screens/newMeal";
import { Statistics } from "@screens/statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={NewMeal} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="mealinfo" component={MealInfo} />
      <Screen name="mealedit" component={MealEdit} />
    </Navigator>
  );
}
