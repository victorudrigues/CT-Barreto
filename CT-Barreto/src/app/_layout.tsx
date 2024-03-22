
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./index";

import { Footer } from "../components/Footer";
import { NavigationContainer } from "@react-navigation/native";

import TabBar from "../../components/TabBar/tabBar"; // Importe o componente MyTabBar

const Tab = createBottomTabNavigator();

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_500Medium
    });

    if (!fontsLoaded) {
        return null; // Retorne null enquanto as fontes não forem carregadas
    }

    return fontsLoaded ? (
        <NavigationContainer independent={true}>
            <Tab.Navigator 
                initialRouteName={'Home'} 
                tabBar={(props) => <TabBar {...props} />}

                //Retirando a barra de navegação acima
                screenOptions={{headerShown: false}}
                > 
                <Tab.Screen name="Alunos" component={Footer} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Cadastro" component={Footer} />

            </Tab.Navigator>
        </NavigationContainer>
    ) : null;
}
