// Header.tsx
import React from 'react';
import { View, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../theme';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { styles } from './styles';

type RootDrawerParamList = {
 Alunos: undefined;
 AlunosGraduados: undefined;
 // Adicione outras rotas conforme necessário
};

type Props = {
 navigation: DrawerNavigationProp<RootDrawerParamList, 'Alunos'>;
};

export const Header = ({ navigation }: Props) => {
 return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: './ctLogo.png' }} style={styles.image} />
        <MaterialIcons
          onPress={() => navigation.toggleDrawer()}
          name="menu"
          size={32}
          color={theme.colors.gray[100]}
        />
      </View>
    </View>
 );
};
