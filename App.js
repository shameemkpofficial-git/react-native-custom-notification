import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import PushNotification from 'react-native-push-notification';
import {
  showNotification,
  handleScheduleNotification,
  handleCancelNotification,
  notificationConfig,
  createChannelId,
} from './notification.android';

const App = () => {
  notificationConfig();
  createChannelId();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => showNotification()}>
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
