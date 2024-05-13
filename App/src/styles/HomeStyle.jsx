import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
    
    //? All the Profile Partition
    //? | 1/2 
    //? | Top

    PROFILE_CONTAINER: {
        backgroundColor: '#000',
        flex: 1
    },

    //? All the Connection Partition 
    //? | 2/2 
    //? | Bottom

    CONNECTION_CONTAINER: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});