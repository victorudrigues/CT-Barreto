// _layout.tsx
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import React from 'react';

import Home from './index/index'
import { AlunosScreen } from '../components/Alunos/index'
import { AlunosGraduadosScreen } from '../components/Graduados/index'

const Drawer = createDrawerNavigator();

function MyDrawer() {
 return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Alunos" component={AlunosScreen} />
      <Drawer.Screen name="Alunos Graduados" component={AlunosGraduadosScreen} />
    </Drawer.Navigator>
    
 );
}

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_500Medium
    });

    if (!fontsLoaded) {
        return;
    }
    return (
      <NavigationContainer independent={true}>
        <MyDrawer />
      </NavigationContainer>
    );
}
