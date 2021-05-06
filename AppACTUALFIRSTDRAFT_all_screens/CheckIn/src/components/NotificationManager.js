import PushNotificiation from "react-native-push-notification"
import PushNotificiationIOS from "@react-native-community/push-notification-ios"
import {Platform} from 'react-native'
import PushNotification from "react-native-push-notification"

class NotificationManager {
    configure = () => {
        PushNotificiation.configure({
            onRegister: function (token) {
                console.log(" [NotificationManager] onRegister token:", token);
            },

            onNotification: function (notification) {
                console.log(" [NotificationManager] onNOTIFICATION:", notification);
                // process the notification
                // (required) Called when a remote is received or opened, or local notification is opened
                notification.finish(PushNotificationIOS.FetchResult.NoData);
              },
        })
    }

    _buildIOSNotification = (id, title, message, data = {}, options = {}) => {
        return {
            alertAction: options.alertAction || "view",
            category: options.category || "",
            userInfo: {
                id: id,
                item: data
            }
        }
    }

    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotificiation.localNotification({
            ...this._buildIOSNotification(id, title, message, data, options),
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false
        })
    }

    cancelAllLocalNotification = () => {
        if (Platform.OS === 'ios') {
            PushNotificiationIOS.removeAllDeliveredNotifications()
        }
        else {
            PushNotification.cancelAllLocalNotifications()
        }
    }

    unregister = () => {
        PushNotificiation.unregister
    }

}

export const notificationManager = new NotificationManager()