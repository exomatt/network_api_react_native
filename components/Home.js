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
                style={styles.input}
            />
            <TextInput
                label='Round'
                value={round}
                onChangeText={onChangeRound}
                keyboardType='numeric'
                style={styles.input}
            />
            <Button
                mode="contained"
                style={styles.btn}
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
                style={styles.btn}
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
                style={styles.btn}
                onPress={() =>
                    navigation.navigate('Driver standing', {
                        season: season,
                        round: round
                    })
                }>
                Driver standing
            </Button>
        </View>
    )
};
const styles = StyleSheet.create({
    input: {
        height: 50,
        padding: 15,
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    btn: {
        padding: 15,
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
    }
});

export default Home;