import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.btntxt}>Notification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Button: {
    height: 40,
    width: 120,
    backgroundColor: 'green',
    alignSelf: 'center',
  },
  btntxt: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
