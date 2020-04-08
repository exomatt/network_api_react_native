import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const QualifyingDetails = ({ route }) => {
    const { result } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{result.Driver.givenName} {result.Driver.familyName}</Text>
            <Text style={styles.text}>Position: {result.position}</Text>
            <Text style={styles.text}>Nationality: {result.Driver.nationality}</Text>
            <Text style={styles.text}>Team: {result.Constructor.constructorId.replace("_"," ")}</Text>
            <Text style={styles.text}>Driver number: {result.number}</Text>
            <Text style={styles.text}>Q1:: {result.Q1}</Text>
            <Text style={styles.text}>Q2: {result.Q2}</Text>
            <Text style={styles.text}>Q3: {result.Q3}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3dcdc'
    },
    text: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontSize: 20,
        textAlign: 'center'  
    }
});
export default QualifyingDetails;
