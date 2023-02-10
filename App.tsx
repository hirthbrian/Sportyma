import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setDefaultOptions } from "date-fns";
import { fr } from "date-fns/locale";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import { store } from "./src/redux/store";

import { Event, Home } from "./src/views";

setDefaultOptions({ locale: fr });

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerTintColor: "#152D4B",
  headerTitleStyle: {
    fontFamily: "Kanit-Medium",
    fontSize: 22,
  },
};

const App = () => {
  const [fontsLoaded] = useFonts({
    "Kanit-Light": require("./assets/fonts/Kanit-Light.ttf"),
    "Kanit-Regular": require("./assets/fonts/Kanit-Regular.ttf"),
    "Kanit-Medium": require("./assets/fonts/Kanit-Medium.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Event" component={Event} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
