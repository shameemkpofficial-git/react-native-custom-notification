import PushNotification from 'react-native-push-notification';

const showNotification = (title, message) => {
  alert('jump');
  PushNotification.localNotification({
    title: 'Freston User App',
    message: 'This is a testing notification for users',
    channelId: 'channel-id',
    channelName: 'My channel',
  });
};

const handleScheduleNotification = (title, message) => {
  // alert(new Date());
  PushNotification.localNotificationSchedule({
    title: 'Freston user App',
    message: 'This is Scheduled notification',
    channelId: 'channel-id',
    channelName: 'My channel',
    date: new Date(Date.now() + 5000),
  });
};

const handleCancelNotification = (title, message) => {
  PushNotification.cancelAllLocalNotifications();
};

const notificationConfig = () => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
    },

    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
    },

    onRegistrationError: function (err) {
      console.error(err.message, err);
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    popInitialNotification: true,

    requestPermissions: true,
  });
};

const createChannelId = () => {
  PushNotification.createChannel(
    {
      channelId: 'channel-id', // (required)
      channelName: 'My channel', // (required)
      channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      // importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
};

export {
  showNotification,
  handleScheduleNotification,
  handleCancelNotification,
  notificationConfig,
  createChannelId,
};
