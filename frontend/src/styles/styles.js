import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:"#f5f5f5"
    },

    title:{
        fontSize:22,
        textAlign:"center",
        marginBottom:20
    },

    card:{
        flexDirection:"row",
        justifyContetn:"space-between",
        alignItems: "center",
        backgroundColor:"#fff",
        padding:10,
        marginBottom:10,
        borderRadius:5
    },

    infoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },

    name:{
        fontSize:14
    },

    email:{
        fontSize:10
    },

    button:{
        padding:10,
        backgroundColor:"#4CAF50",
        borderRadius:5,
        gap: 100
    }
});