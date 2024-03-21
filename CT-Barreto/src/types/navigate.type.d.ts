// Supondo que você tenha um arquivo de tipos separado ou no mesmo arquivo
import { NavigationProp } from '@react-navigation/native';

// Defina a lista de parâmetros de rota
export type RootStackParamList = {
 Home: undefined;
 Feed: undefined;
 // Adicione outras rotas conforme necessário
};

// Defina o tipo de navigation para o Stack
export type RootNavigationProp = NavigationProp<RootStackParamList>;