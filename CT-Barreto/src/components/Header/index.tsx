import { View, Image, Text} from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { theme } from "../../theme"


export const Header = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{uri:  "./ctLogo.png" }} style={styles.image}/>

                <MaterialIcons name="menu" size={32} color={theme.colors.gray[100]}/>
            

            </View>   
            
        </View>
    )
}