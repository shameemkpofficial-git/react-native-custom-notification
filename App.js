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
import OneSignal from 'react-native-onesignal';
// import {oneSign} from './OneSignal/index';

const App = () => {
  React.useEffect(() => {
    OneSignal.setAppId('3648c48b-2495-4553-90e7-4f22ba0c4546');

    // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
    OneSignal.promptForPushNotificationsWithUserResponse();

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
  }, []);

  notificationConfig();
  createChannelId();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => showNotification()}>
        <Text style={styles.btntxt}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => demo()}>
        <Text style={styles.btntxt}>Demo</Text>
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
