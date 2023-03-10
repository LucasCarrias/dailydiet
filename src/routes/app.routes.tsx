import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreatedMeal } from "@screens/CreatedMeal";
import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";
import { ShowMeal } from "@screens/ShowMeal";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="new" component={NewMeal} />

      <Screen name="edit" component={NewMeal} />

      <Screen name="created" component={CreatedMeal} />

      <Screen name="show" component={ShowMeal} />

      <Screen name="stats" component={Statistics} />
    </Navigator>
  );
}
