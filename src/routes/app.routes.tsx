import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/home";
import { NewMeal } from "@screens/newMeal";
import { Statistics } from "@screens/statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={NewMeal} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  );
}
