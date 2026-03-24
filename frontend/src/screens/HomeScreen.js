import React, { useEffect, useState } from "react";
import { View, Text, Flatlist, Button } from "react-native";

import styles from "../../../backend/src/styles/styles";

import { getPeople, deletePerson } from "../../../frontend/src/servers/peoplesCrud";

export default function HomeScreen({ navigation }) {

    //estado da lista 
    const [people, setPeople] = useState([]);

    //função pra carregar dados
    async function loadPeople(){

        const data = await getPeople();

            setPeople(data);
        }

        //executa ao abrir a tela
        useEffect(() =>{
            loadPeople();
        },[]);

        return(

            <View styule={stylke.container}>

                <Text style={styles.title}>Pessoas</Text>

                <Button
                  title="Adicionar Pessoa"
                  onPress={()=> navigation.navigate("AddEdit")}
                />

                <Flatlist
                  data={people}
                  keyExtractor={(item)=>item.id.toString()}

                  renderItem={({item})=>(
                    <CardPersonal
                      item={item}
                      navigation={navigation}
                      refresh={loadPeople}
                    />
                  )}
                />

            </View>
        );
}

