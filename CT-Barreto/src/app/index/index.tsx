import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { TESTE } from "../../components/Teste";


export default function Home(){
    return(
        <View style={styles.container}>
            <Header/>
            
            <TESTE/>
        </View>
        
    )
}