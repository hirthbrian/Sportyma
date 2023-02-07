import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import Home from "./src/views/Home";
import Event from "./src/views/Event";

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Kanit-Light": require("./assets/fonts/Kanit-Light.ttf"),
    "Kanit-Regular": require("./assets/fonts/Kanit-Regular.ttf"),
    "Kanit-Medium": require("./assets/fonts/Kanit-Medium.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="Event" component={Event} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
