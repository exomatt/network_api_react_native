import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export const Home = ({ navigation }) => {
    const [season, onChangeSeason] = useState('');
    const [round, onChangeRound] = useState('');



    return (
        <View>
            <TextInput
                label='Season'
                value={season}
                onChangeText={onChangeSeason}
                keyboardType='numeric'
            />
            <TextInput
                label='Round'
                value={round}
                onChangeText={onChangeRound}
                keyboardType='numeric'
            />
            <Button
                mode="contained"
                onPress={() =>
                    navigation.navigate('Race result', {
                        season: season,
                        round: round
                    })
                }>
                Race result
            </Button>
            <Button
                mode="contained"
                onPress={() =>
                    navigation.navigate('Qualifying result', {
                        season: season,
                        round: round
                    })
                }>
                Qualifying Results
            </Button>
            <Button
                mode="contained"
                onPress={() =>
                    navigation.navigate('Driver standing', {
                        season: season,
                        round: round
                    })
                }>
                Qualifying Results
            </Button>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Home;