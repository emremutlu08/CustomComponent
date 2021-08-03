import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Banner extends Component {
  render() {
    return(
      <View
        style={{
          backgroundColor: this.props.bannerColor,
          padding: 20,
          margin: 5,
          borderRadius: 4
        }}
      >
        <Text>{this.props.bannerTitle}</Text>
      </View>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>

      <Banner bannerTitle="Dhruvil"
        bannerColor="red"
      />

      <Banner bannerTitle="John"
        bannerColor="#00FF00"
      />
      
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
