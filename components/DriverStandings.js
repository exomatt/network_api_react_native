import React, { useState, useEffect } from "react";

import { Text } from "react-native-paper";
import {
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: "#99ebff",
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
  console.log(result);
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate("Driver details", {
          result: result,
        });
      }}
    >
      <Text style={styles.title}>
        {result.position} {result.Driver.givenName} {result.Driver.familyName}
      </Text>
    </TouchableOpacity>
  );
}

const DriverStandings = ({ route }) => {
  const { season, round } = route.params;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setErrors] = useState(false);

  async function fetchData() {
    console.log("Round:", round);
    let res;
    if (round.trim() === "")
      res = await fetch(
        `http://ergast.com/api/f1/${season}/driverStandings.json`
      );
    else
      res = await fetch(
        `http://ergast.com/api/f1/${season}/${round}/driverStandings.json`
      );
    res
      .json()
      .then((res) => {
        let obj = JSON.parse(JSON.stringify(res));
        console.log("TERA wyniki ");
        console.log(obj.MRData.StandingsTable.StandingsLists[0]);
        setData(obj.MRData.StandingsTable.StandingsLists[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrors(true);
        setIsLoading(false);
        console.log("Error", err);
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
    } else if (hasError) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <Text>Problem with loading data!</Text>
        </View>
      );
    } else if (round.trim() === "") {
      return (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}
        >
          <Text>Season: {season} </Text>
          <Text>Driver standing: </Text>
          <FlatList
            data={data["DriverStandings"]}
            renderItem={({ item }) => <Item result={item} />}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      );
    } else {
      return (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}
        >
          <Text>Season: {season} </Text>
          <Text>Round: {round} </Text>
          <Text>Driver standing: </Text>
          <FlatList
            data={data["DriverStandings"]}
            renderItem={({ item }) => <Item result={item} />}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      );
    }
  };

  return <>{showData()}</>;
};

export default DriverStandings;
