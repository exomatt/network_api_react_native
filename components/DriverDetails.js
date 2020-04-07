import React from 'react';

import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-paper';

const DriverDetails = ({ route }) => {
    const { result } = route.params;
    return (
        <>
            <Text>{result.Driver.givenName} {result.Driver.familyName}</Text>
            <Text>Position: {result.position}</Text>
            <Text>Wins: {result.wins}</Text>
            <Text>Driver number: {result.number}</Text>
            <Text>Team: {result.Constructors[0].constructorId.replace("_", " ")}</Text>
            <Text>Nationality: {result.Driver.nationality}</Text>
        </>
    )
}

export default DriverDetails;
