// import { StyleSheet } from "react-native"
// import { theme } from "../../theme"

// export const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: theme.colors.dark[500],
//     }
// })
import { StyleSheet } from "react-native"
import { theme } from "../../theme"
export const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray[400]
    },
    header: {
        width: "100%",
        flex: 1,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,

        backgroundColor: theme.colors.dark[500],

    },
    image: {
        width: 80,
        height: 80,

    }
})