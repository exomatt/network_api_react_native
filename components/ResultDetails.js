
import React from 'react';

import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-paper';

const ResultDetails = ({ route }) => {
    const { result } = route.params;
    return (
        <>
            <Text>{result.Driver.givenName} {result.Driver.familyName}</Text>
            <Text>Position: {result.position}</Text>
            <Text>Nationality: {result.Driver.nationality}</Text>
            <Text>Team: {result.Constructor.constructorId.replace("_", " ")}</Text>
            <Text>Driver number: {result.number}</Text>
            <Text>Points: {result.points}</Text>
            <Text>Laps: {result.laps}</Text>
            <Text>Status: {result.status}</Text>
            <Text>Fastest lap time: {result.FastestLap.Time.time}</Text>
            <Text>Fastest lap average speed: {result.FastestLap.AverageSpeed.speed} {result.FastestLap.AverageSpeed.units}</Text>
        </>
    )
}

export default ResultDetails;
