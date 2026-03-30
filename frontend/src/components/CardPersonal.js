import { deletePerson } from "../servers/peopleCrud";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "../styles/styles";

export default function CardPersonal({item, navigation, refresh}){

    return(

        <View style={styles.card}>

            <View style={styles.infoContainer}>

                <Text style={styles.name} numberOfLines={1}>
                    {item.firstName} {item.lastName}
                </Text>

                <Text style={styles.email} numberOfLines={1}>
                    {item.email}
                </Text>

            </View>

        <View style={{marginLeft: 120}}>

            <Button
              title="Editar"
              onPress={()=> navigation.navigate("AddEdit",{person:item})}
            />

            <Button
              title="Deletar"
              onPress={async ()=>{
                await deletePerson(item.id);
                refresh();
              }}
            />
        </View>

    </View>
    )
}
