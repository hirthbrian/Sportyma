import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import { store } from "./src/redux/store";

var setDefaultOptions = require("date-fns/setDefaultOptions");
import { fr } from "date-fns/locale";
setDefaultOptions({ locale: fr });

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
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTintColor: "#152D4B",
            headerTitleStyle: {
              fontFamily: "Kanit-Medium",
              fontSize: 22,
            },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Event" component={Event} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
