import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    color: ["#00C6FB", "#005BEA"],
    title: "It's rainning",
    subtitle: "Look at the window. The she loves rainming.",
    icon: "ios-rainy"
  },
  Clear: {
    color: ["#FEF253", "#FF7300"],
    title: "Sunnnnnny.",
    subtitle: "Go to the outside",
    icon: "ios-sunny"
  },
  Thunderstorm: {
    color: ["#00ECBC", "#007ADF"],
    title: "Thor is comming.",
    subtitle: "Thor is sexy guy",
    icon: "ios-thunderstorm"
  },
  Clouds: {
    color: ["#D7D2CC", "#304352"],
    title: "Clouds.",
    subtitle: "Not bad",
    icon: "ios-cloudy"
  },
  Snow: {
    color: ["#7DE2FC", "#B9B6E5"],
    title: "Snowing",
    subtitle: "Let it snow, Let it snow, Let it snow",
    icon: "ios-snow"
  },
  Drizzle: {
    color: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain",
    icon: "ios-cloudy-night"
  }
};

function Weather({ temp, weatherName }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].color}
      style={styles.container}
    >
      <View style={styles.upper}>
        <Ionicons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  temp: {
    fontSize: 48,
    color: "#fff",
    marginTop: 10,
    backgroundColor: "transparent"
  },
  bottom: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
