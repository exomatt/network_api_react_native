import React, { useState, useEffect } from 'react';

import { Text } from 'react-native-paper';
import { ScrollView, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

export const RaceResult = ({ route, navigation }) => {
    const { season, round } = route.params
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setErrors] = useState(false);

    async function fetchData() {
        const res = await fetch(`http://ergast.com/api/f1/${season}/${round}/results.json`)
        res
            .json()
            .then(res => {
                setData(res)
                setIsLoading(false)
                console.log(res)
            }
            )
            .catch(err => {
                setErrors(err)
                setIsLoading(false)
                console.log("Error",err)
            });
    }


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
        else {
            return (
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.container}>
                    <Text>Season: {season} </Text>
                    <Text>Round: {round} </Text>
                </ScrollView>
            );
        }
    }

    return (
        <>
            {showData()}
        </>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RaceResult;