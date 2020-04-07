import React, { useState, useEffect } from 'react';

import { Text, Searchbar } from 'react-native-paper';
import { ScrollView, View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#99ebff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        textAlign: "center",
        fontSize: 26,
    },
});

function Item({ result }) {
    const navigation = useNavigation();
    console.log(result)
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                navigation.navigate('Result details', {
                    result: result,
                });
            }}>
            <Text style={styles.title}>{result.position} {result.Driver.givenName} {result.Driver.familyName}</Text>
        </TouchableOpacity>
    );
}

const RaceResult = ({ route }) => {
    const { season, round } = route.params
    const [data, setData] = useState([]);
    const [array, setArray] = useState([]);
    const [originalArray, setOriginalArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setErrors] = useState(false);

    async function fetchData() {
        const res = await fetch(`http://ergast.com/api/f1/${season}/${round}/results.json`)
        res
            .json()
            .then(res => {
                let obj = JSON.parse(JSON.stringify(res))
                setData(obj["MRData"]["RaceTable"]["Races"][0])
                setArray(obj["MRData"]["RaceTable"]["Races"][0]["Results"])
                setOriginalArray(obj["MRData"]["RaceTable"]["Races"][0]["Results"])
                setIsLoading(false)
                
            }
            )
            .catch(err => {
                setErrors(true)
                setIsLoading(false)
                console.log("Error",err)
            });
    }
    
    searchFilterFunction = (text) => {
        console.log("Searching", text)
        const newData = originalArray.filter(item => {
            const itemData = `${item.position.toUpperCase()} ${item.Driver.givenName.toUpperCase()} ${item.Driver.familyName.toUpperCase()}`;
            console.log(itemData)
            const textData = text.toUpperCase();

            return itemData.includes(textData);
        });
        console.log(newData)
        setArray(newData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const showData = () => {
        if (isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        else if (hasError) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <Text>Problem with loading data!</Text>
                </View>
            );
        }
        else {
            return (
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.container}>
                    <Searchbar
                        placeholder="Filter Drivers..."
                        lightTheme
                        round
                        onChangeText={text => searchFilterFunction(text)}
                        autoCorrect={false}
                    />    
                    <Text>Season: {season} </Text>
                    <Text>Round: {round} </Text>
                    <Text>Race name: {data["raceName"]} </Text>
                    <Text>Date: {data["date"]} </Text>
                    <Text>Circuit name: {data["Circuit"]["circuitName"]} </Text>
                    <Text>Scoreboard:  </Text>
                    <FlatList
                        data={array}
                        renderItem={({ item }) =>
                            <Item result={item} />}
                        keyExtractor={item => item.id}

                    />
                </ScrollView>
            );
        }
    }

    return (
        <>
            {showData()}
        </>
    )
}

export default RaceResult;