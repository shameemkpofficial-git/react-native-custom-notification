import PushNotification from 'react-native-push-notification';
import React from 'react';
import moment from 'moment';
import {user} from './birthday';

const showNotification = (title, message) => {
  //   const [dob, setDob] = React.useState([]);
  const d = new Date();
  const month = d.getMonth();
  const day = d.getDate();
  const currentDate = month + day;
  let date = moment(d).format('MM-D');
  const id = user.map(item => {
    if (item.dob === moment(d).format('MM-D')) {
      PushNotification.localNotification({
        title: 'Birthday',
        message: 'A wonderful day for',
        channelId: 'channel-id',
        channelName: 'My channel',
        date: new Date(Date.now() + 10000),
        largeIconUrl: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',
        bigText:
          'My big text that will be shown when notification is expanded. Styling can be done using HTML tags(see android docs for details)',
        color: 'red',
        groupSummary: false,
      });
    }
    console.log(moment(d).format('MM-D'), '', item.dob);
  });

  console.log(typeof date);
  //   console.log(currentDate);
};

const handleScheduleNotification = (title, message) => {
  // alert(new Date());
  PushNotification.localNotificationSchedule({
    title: 'Freston user App',
    message: 'This is Scheduled notification',
    channelId: 'channel-id',
    channelName: 'My channel',
    date: new Date(Date.now() + 5000),
    largeIconUrl: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',
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
