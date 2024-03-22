import { View, Image, Text} from "react-native"

import { MaterialIcons } from "@expo/vector-icons"
import { theme } from "../../theme"


export const Footer = () =>{
    return(
        <View>
            <View >
                <Image source={{uri:  "./ctLogo.png" }} />

                <MaterialIcons name="menu" size={32} color={theme.colors.gray[100]}/>
            

            </View>   
            
        </View>
    )
}