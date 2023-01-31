import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
export default class LoginScreen extends React.Component {
  state = {
    name: ""
  }

  continue = () => {
    this.props.navigation.navigate("Chat", { name: this.state.name })
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{ marginTop: 64 }}>
          <Image source={require('../assets/logo.png')} style={{ width: 120, height: 120, alignSelf: "center", borderRadius: 70 }} />
        </View>
        <View style={{ marginHorizontal: 32 }}>
          <Text style={styles.header}>Welcome to world chat</Text>

          <TextInput
            style={styles.input} placeholder="Your name"
            onChangeText={name => { this.setState({ name }) }}
            value={this.state.name}
          />
          <View style={{ alignItems: "flex-end", marginTop: 64 }}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <Image source={require('../assets/nextbtn.png')} style={{ width: 100, height: 100 }} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ marginTop: 40, color: "green", marginLeft: 20 }}>Made By</Text>
        <Text style={{ marginTop: 10, color: "blue", marginLeft: 20 }}>insta:</Text>
        <Text style={{ marginTop: 10, color: "red", marginLeft: 20 }}>_tauheed_ad_</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7"
  },

  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20
  },

  header: {
    fontWeight: "800",
    fontSize: 30,
    color: "red",
    marginTop: 32,
    marginLeft: 50
  },
  input: {
    marginTop: 32,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514ESA",
    fontWeight: "600"
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#9075E3",
    alignItems: 'center',
    justifyContent: 'center'
  }
});