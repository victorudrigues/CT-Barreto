import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    tabBar: {
        flex: 1,
        flexDirection: 'row',
        height: 70,
        position: 'absolute',
        bottom: 25,
        right: 16,
        left: 16,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
       
    },
    contentTaBar: {
        flex: 1, 
        alignItems: 'center'
    }
})