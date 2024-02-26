import { LinkingOptions } from '@react-navigation/native'
import * as Notifications from 'expo-notifications'
import * as ExpoLinking from 'expo-linking'
import { Linking } from 'react-native'

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: [ExpoLinking.createURL('/')],
  config: {
    screens: {
      HomeStack: {
        path: 'home',
        screens: {
          OrderDetail: 'orders/:id',
        },
      },
    },
  },
  async getInitialURL() {
    const url = await Linking.getInitialURL()

    if (url !== null) return url
    const response: Notifications.NotificationResponse | null =
      await Notifications.getLastNotificationResponseAsync()

    return response?.notification.request.content.data.redirect
  },

  subscribe(listener) {
    const onReceiveURL = ({ url }: { url: string }) => listener(url)
    const eventListenerSubscription = Linking.addEventListener('url', onReceiveURL)

    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response: Notifications.NotificationResponse) => {
        const url = response.notification.request.content.data.redirect

        listener(url)
      }
    )

    return () => {
      eventListenerSubscription.remove()
      subscription.remove()
    }
  },
}

export default linking
