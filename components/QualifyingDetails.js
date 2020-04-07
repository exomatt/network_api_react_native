import React from 'react';

import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-paper';

const QualifyingDetails = ({ route }) => {
    const { result } = route.params;
    return (
        <>
            <Text>{result.Driver.givenName} {result.Driver.familyName}</Text>
            <Text>Position: {result.position}</Text>
            <Text>Nationality: {result.Driver.nationality}</Text>
            <Text>Team: {result.Constructor.constructorId.replace("_"," ")}</Text>
            <Text>Driver number: {result.number}</Text>
            <Text>Q1:: {result.Q1}</Text>
            <Text>Q2: {result.Q2}</Text>
            <Text>Q3: {result.Q3}</Text>
        </>
    )
}

export default QualifyingDetails;
